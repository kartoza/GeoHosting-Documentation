// Affiliate-programme screenshot capture spec.
//
// Drives every UX flow we describe in
// docs/src/users/affiliate-programme/*.md and saves the resulting
// PNGs into docs/src/users/affiliate-programme/img/ so the placeholder
// <!-- TODO: screenshot --> comments can be swapped for real <img>s.
//
// Repeatable via:
//   nix run .#take-screenshots                 (recommended)
//   # or, manually:
//   #   nix run .#seed-screenshot-fixtures
//   #   nix run .#serve   (in another shell)
//   #   cd docs/playwright && playwright test affiliate.spec.ts
//
// Expects the dev server on http://localhost:8000 and the
// applicant_demo / submitter_demo / reseller_demo / trainer_demo
// users seeded by affiliates_seed_screenshot_fixtures.
import { test, expect, Page } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

const SEGMENT = ['users', 'affiliate-programme'];

const APPLICANT_EMAIL = 'applicant_demo@gsh.test';
const APPLICANT_PASSWORD = 'applicant-demo-pass';

const SUBMITTER_EMAIL = 'submitter_demo@gsh.test';
const SUBMITTER_PASSWORD = 'submitter-demo-pass';

const RESELLER_EMAIL = 'reseller@example.com';
const RESELLER_PASSWORD = 'reseller-demo-pass';

const TRAINER_EMAIL = 'trainer@example.com';
const TRAINER_PASSWORD = 'trainer-demo-pass';

// Each test starts a fresh browser context so signin state is clean.
test.use({ storageState: { cookies: [], origins: [] } });

async function signIn(page: Page, email: string, password: string) {
  await page.goto('/#/');
  await page.waitForLoadState('networkidle');
  // Click whichever sign-in entry point the SPA exposes. Be permissive
  // because the chrome can vary between routes.
  for (const candidate of [
    page.getByRole('button', { name: /^Login$/i }),
    page.getByRole('button', { name: /^Sign in$/i }),
    page.getByRole('link', { name: /Login|Sign in/i }),
  ]) {
    if (await candidate.count()) {
      await candidate.first().click();
      break;
    }
  }
  // Modal with email + password fields.
  await page.getByRole('textbox', { name: /Email/i }).fill(email);
  await page.getByRole('textbox', { name: /Password/i }).fill(password);
  // Submit (the modal's button shares the "Login" label).
  await page
    .getByRole('button', { name: /^(Login|Sign in)$/i })
    .last()
    .click();
  // Give the SPA a moment to settle. Don't wait for a specific element
  // because different users land on different post-login routes.
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
}

async function fillApplyDetails(page: Page) {
  await page.getByLabel(/Country/i).fill('ZA');
  await page.getByLabel(/Signatory name/i).fill('Tim Sutton');
  await page.getByLabel(/Tax identifiers/i).fill('eu_vat=GB123, sars_id=ZA456');
}

async function fillApplyChannels(page: Page) {
  await page.getByPlaceholder(/Acme Newsletter/).first().fill(
    'Acme GIS Newsletter',
  );
  await page.getByPlaceholder(/https:\/\//).first().fill(
    'https://acme.example/newsletter',
  );
  await page.getByPlaceholder(/e\.g\. 1500/).fill('1850');
  await page.getByPlaceholder(/Who.*audience/).fill(
    'Mid-career GIS analysts in Southern Africa.',
  );
  await page.getByRole('button', { name: /\+ Add channel/ }).click();
  await page.getByPlaceholder(/Acme Newsletter/).nth(1).fill('GeoSpatial Podcast');
  await page.getByPlaceholder(/https:\/\//).nth(1).fill('https://geopodcast.example');
}

async function fillApplyPitch(page: Page) {
  await page
    .getByPlaceholder(/2.{0,3}3 sentences/)
    .fill(
      "We've worked with Kartoza products since 2018 and our audience is the natural home for the GSH product line. Open-source first, region-specific, and we already field-test most of these tools weekly.",
    );
  await page
    .getByPlaceholder(/Be concrete/)
    .fill(
      'A launch post in our July newsletter, a 30-min workshop slot at our annual user conference, and a feature segment in episode 42 of the GeoSpatial Podcast.',
    );
}

// ---------------------------------------------------------------
// Apply form — uses applicant_demo (no Affiliate row, persistent).
// Each capture is a full-page screenshot — robust against Chakra
// class-name churn; we trade element-only crops for reliability.
// ---------------------------------------------------------------
test.describe.serial('Affiliate apply form', () => {

  test('apply landing', async ({ page }) => {
    await signIn(page, APPLICANT_EMAIL, APPLICANT_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await page.waitForLoadState('networkidle');
    await expect(
      page.getByRole('heading', { name: /Choose your track/i }),
    ).toBeVisible({ timeout: 10_000 });
    await saveScreenshot({
      page,
      name: 'apply-landing.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

  test('track cards (reseller selected)', async ({ page }) => {
    await signIn(page, APPLICANT_EMAIL, APPLICANT_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await expect(
      page.getByRole('heading', { name: /Choose your track/i }),
    ).toBeVisible({ timeout: 10_000 });
    // Reseller is default — capture as-is.
    await saveScreenshot({
      page,
      name: 'apply-tracks.png',
      pathSegments: SEGMENT,
      fullPage: false,
    });
  });

  test('details + channels + pitch + components', async ({ page }) => {
    await signIn(page, APPLICANT_EMAIL, APPLICANT_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await expect(
      page.getByRole('heading', { name: /Your details/i }),
    ).toBeVisible({ timeout: 10_000 });

    await fillApplyDetails(page);
    await saveScreenshot({
      page, name: 'apply-details.png', pathSegments: SEGMENT, fullPage: true,
    });

    await fillApplyChannels(page);
    await saveScreenshot({
      page, name: 'apply-channels.png', pathSegments: SEGMENT, fullPage: true,
    });

    await fillApplyPitch(page);
    await saveScreenshot({
      page, name: 'apply-pitch.png', pathSegments: SEGMENT, fullPage: true,
    });

    // Switch to Trainer to surface the Components block.
    await page.getByText(/Certified Trainer/i).first().click();
    await page.waitForTimeout(300);
    // Tick two components.
    const qgis = page.getByRole('checkbox', { name: /^QGIS$/i });
    if (await qgis.count()) {
      await qgis.check();
      await page.getByPlaceholder(/portfolio|LMS completion/i).first().fill(
        'https://lms.kartoza.com/certificates/qgis-trainers/tim-sutton',
      );
    }
    const postgis = page.getByRole('checkbox', { name: /^PostGIS$/i });
    if (await postgis.count()) {
      await postgis.check();
    }
    await saveScreenshot({
      page, name: 'apply-components.png', pathSegments: SEGMENT, fullPage: true,
    });
  });

  // Decision panel — uses submitter_demo (wiped at the start of every
  // screenshot run by the fixture command).
  test('approved decision panel', async ({ page }) => {
    await signIn(page, SUBMITTER_EMAIL, SUBMITTER_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await expect(
      page.getByRole('heading', { name: /Your details/i }),
    ).toBeVisible({ timeout: 10_000 });
    await fillApplyDetails(page);
    await fillApplyChannels(page);
    await fillApplyPitch(page);
    // Acceptances. Chakra's checkbox is a real <input> hidden under
    // a styled <span> that intercepts pointer events — force the
    // check programmatically so we don't fight the overlay.
    for (const label of [
      /partner agreement/i,
      /code of conduct/i,
      /brand[- ]fit/i,
    ]) {
      const cb = page.getByRole('checkbox', { name: label });
      if (await cb.count()) await cb.check({ force: true });
    }
    await page.getByRole('button', { name: /Submit application/i }).click();
    // Wait for the decision panel — the apply form is replaced.
    await expect(
      page
        .getByText(/Approved|Flagged|Rejected|decision/i)
        .first(),
    ).toBeVisible({ timeout: 15_000 });
    await saveScreenshot({
      page, name: 'apply-decision-approved.png',
      pathSegments: SEGMENT, fullPage: true,
    });
  });

});

// ---------------------------------------------------------------
// Partner dashboard — uses reseller_demo (full state).
// ---------------------------------------------------------------
test('partner dashboard overview', async ({ page }) => {
  await signIn(page, RESELLER_EMAIL, RESELLER_PASSWORD);
  await page.goto('/#/partner');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await saveScreenshot({
    page,
    name: 'dashboard-overview.png',
    pathSegments: SEGMENT,
    fullPage: true,
  });
});

test('referrals page', async ({ page }) => {
  await signIn(page, RESELLER_EMAIL, RESELLER_PASSWORD);
  await page.goto('/#/partner/referrals');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  // Try to open the new-code modal — but don't fail the whole capture
  // if the button label drifts.
  const newCodeBtn = page.getByRole('button', { name: /new code/i });
  if (await newCodeBtn.count()) {
    await newCodeBtn.first().click();
    await page.waitForTimeout(400);
  }
  await saveScreenshot({
    page, name: 'referrals-new-code.png',
    pathSegments: SEGMENT, fullPage: true,
  });
});

test('training components page', async ({ page }) => {
  await signIn(page, TRAINER_EMAIL, TRAINER_PASSWORD);
  await page.goto('/#/partner/training');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await saveScreenshot({
    page,
    name: 'training-components.png',
    pathSegments: SEGMENT,
    fullPage: true,
  });
});
