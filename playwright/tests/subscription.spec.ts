// playwright-docs/tests/subscription.spec.ts
import { test, expect } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

test.use(
    {
        storageState: 'auth.json'
    }
);

test('GeoHosting: Full subscription flow + SLA modal + finish', async ({ page }) => {
  // Home → click into G3W subscription
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page
    .getByRole('listitem')
    .filter({ hasText: 'G3WPublish your QGIS projects' })
    .getByRole('button')
    .click();
  await page.waitForLoadState('domcontentloaded');

  // Capture each of the three pricing cards
  const plans = ['G3W Basic', 'G3W Advanced', 'G3W Gold'];
  for (let i = 0; i < plans.length; i++) {
    const title = plans[i];
    const card = page.locator('h3', { hasText: title }).first().locator('..');
    await expect(card).toBeVisible();
    await saveScreenshot({
      page,
      name: `subscription-img-${4 + i}.png`, // 4,5,6
      target: card,
      fullPage: false,
      padding: 20,
    });
  }

  // Configuration step → subscription-img-1.png
  await saveScreenshot({ page, name: 'subscription-img-1.png' });

  // Click “Next” → Payment step
  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForLoadState('domcontentloaded');

  // Payment step → subscription-img-2.png (clip the Stripe button)
  const payBtn = page.getByRole('button', { name: /Pay with Stripe/i });
  await payBtn.waitFor();
  await saveScreenshot({
    page,
    name: 'subscription-img-2.png',
    target: payBtn,
    fullPage: false,
    padding: 20,
  });

  // Open the SLA modal via “?” icon
  const helpBtn = page.getByRole('button', { name: '?' });
  await helpBtn.click();
  await page.waitForSelector('text=Service Level Agreement');

  // SLA modal → subscription-img-3.png
  const slaDialog = page.locator('div[role="dialog"]');
  await saveScreenshot({
    page,
    name: 'subscription-img-3.png',
    target: slaDialog,
    fullPage: false,
    padding: 20,
  });

  // Close the SLA modal → subscription-img-7.png
  await slaDialog.getByRole('button', { name: 'Close' }).click();
  await page.waitForTimeout(500);
  await saveScreenshot({ page, name: 'subscription-img-7.png' });

  await slaDialog.evaluate((node) => {
    node.scrollTo({ top: node.scrollHeight });
  });
  await page.waitForTimeout(300);
  await saveScreenshot({
    page,
    name: 'subscription-img-10.png',
    target: slaDialog,
    fullPage: false,
    padding: 20,
  });

  // Fill in required information inside SLA
  // (Replace these with your actual input names/selectors)
  await slaDialog.locator('input[name="clientName"]').fill('');
  await slaDialog.locator('input[name="effectiveDate"]').fill("");
  await slaDialog.locator('input[name="signature"]').fill(
    ""
  );
  await page.waitForTimeout(200);

  // Accept the SLA → subscription-img-11.png
  await slaDialog.getByRole('button', { name: /Accept/i }).click();
  await page.waitForTimeout(500);
  await saveScreenshot({ page, name: 'subscription-img-11.png' });
});
