import { test, expect } from '@playwright/test';
import path from 'node:path';
import { DOC_SRC } from '../playwright.config';

test.use({
  storageState: 'auth.json'
});

test('G3W page', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('img').nth(1)).toBeVisible();
  await expect(page.locator('#root')).toContainText('Professional GeoSpatial hosting for open-source GIS web applications.');
  await expect(page.getByRole('img', { name: 'G3W' })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: 'G3WPublish your QGIS projects' }).getByRole('button').click();
  await expect(page.locator('h1')).toContainText('G3W Hosting');
  // await page.mouse.move(0, 1);
  await page.waitForLoadState('domcontentloaded');
  await page.screenshot({
      path: path.join(DOC_SRC, 'products', 'g3w', 'img', 'g3w-testing.png'),
      
    });
});