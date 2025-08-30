// playwright-docs/tests/subscription.spec.ts
import { test, expect } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

test.use({ storageState: 'auth.json' });

test('GeoHosting: Subscription flow + SLA modal + finish', async ({ page }) => {
  // HOME ────────────────────────────────────────────────────────────────
  await page.goto('https://geohosting.sta.do.kartoza.com/#/');
  await page.waitForLoadState('networkidle');
  // sanity checks
  await expect(page.locator('img').nth(1)).toBeVisible();
  await expect(page.getByRole('img', { name: 'G3W' })).toBeVisible();

  // NAVIGATE TO G3W SUBSCRIPTION ────────────────────────────────────────
  await page
    .getByRole('listitem')
    .filter({ hasText: 'G3WPublish your QGIS projects' })
    .getByRole('button')
    .click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('h1')).toContainText('G3W Hosting');
  await expect(page.getByRole('heading', { name: 'Publish your QGIS projects on' })).toBeVisible();

  // PRICING CARDS (subscription-img-1…3) ─────────────────────────────────
  const plans = ['G3W Basic', 'G3W Advanced', 'G3W Gold'];
  for (let i = 0; i < plans.length; i++) {
    const card = page.locator('h3', { hasText: plans[i] }).first().locator('..');
    await expect(card).toBeVisible();
    await saveScreenshot({
      page,
      name: `subscription-img-${i + 1}.png`,   // 1,2,3
      target: card,
      fullPage: false,
      padding: 20,
    });
  }

  // ORDER BASIC → CONFIGURATION (subscription-img-4) ──────────────────
  await page.getByRole('button', { name: 'Order Basic' }).click();
  await expect(page.getByRole('heading', { name: 'Configuration' })).toBeVisible();
  await saveScreenshot({
    page,
    name: 'subscription-img-4.png',
    fullPage: true,
  });

  // NEXT → PAYMENT (subscription-img-5) ─────────────────────────────────
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  const payBtn = page.getByRole('button', { name: /Pay with Stripe/i });
  await payBtn.waitFor();
  await saveScreenshot({
    page,
    name: 'subscription-img-5.png',
    target: payBtn,
    fullPage: false,
    padding: 20,
  });

  // OPEN SLA MODAL (subscription-img-6) ─────────────────────────────────
  await payBtn.click();
  await expect(page.locator('h1')).toContainText('Service Level Agreement (SLA)');
  await saveScreenshot({
    page,
    name: 'subscription-img-6.png',
    fullPage: false,
    padding: 20,
  });

  // SIGN SLA (canvas) + ACCEPT (subscription-img-7) ─────────────────────
  const canvas = page.locator('canvas').first();
  const box = await canvas.boundingBox();
  if (box) {
    await page.mouse.move(box.x + 10, box.y + 10);
    await page.mouse.down();
    await page.mouse.move(box.x + 60, box.y + 60);
    await page.mouse.up();
  }
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.waitForTimeout(500);
  await saveScreenshot({
    page,
    name: 'subscription-img-7.png',
    fullPage: true,
  });

  // FINISH (subscription-img-8) ────────────────────────────────────────
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('domcontentloaded');
  await saveScreenshot({
    page,
    name: 'subscription-img-8.png',
    fullPage: true,
  });
});
