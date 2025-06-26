// playwright-docs/tests/homepage.spec.ts
import { test, expect } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs/promises';
import { DOC_SRC } from '../playwright.config';


test('GeoHosting home page loads', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveTitle(/geo/i);

  // Build docs path → docs/src/img/homepage.png
  const imgDir = path.join(DOC_SRC, 'img');
  await fs.mkdir(imgDir, { recursive: true });

  await page.screenshot({
    path: path.join(imgDir, 'homepage.png'),
    fullPage: true,
  });
});
