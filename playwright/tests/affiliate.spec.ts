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

// Don't reuse the global storageState — these tests want to sign in
// as different users.
test.use({ storageState: { cookies: [], origins: [] } });

async function signIn(page: Page, email: string, password: string) {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  // The GSH SPA shows "Login" in the top-right when signed out. The
  // selector may vary slightly depending on theme — fall back to a
  // text match if the named role doesn't exist.
  const loginBtn = page.getByRole('button', { name: 'Login' });
  if (await loginBtn.count()) {
    await loginBtn.click();
  } else {
    await page.getByRole('link', { name: /sign in/i }).click();
  }
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('networkidle');
}

async function fillApplyDetails(page: Page) {
  await page.getByLabel(/Country/i).fill('ZA');
  await page.getByLabel(/Signatory name/i).fill('Tim Sutton');
  await page.getByLabel(/Tax identifiers/i).fill('eu_vat=GB123, sars_id=ZA456');
}

async function fillApplyChannels(page: Page) {
  // First (already-present) row.
  await page.getByPlaceholder(/Acme Newsletter/).fill('Acme GIS Newsletter');
  await page.getByPlaceholder(/https:\/\//).first().fill(
    'https://acme.example/newsletter',
  );
  await page.getByPlaceholder(/e\.g\. 1500/).fill('1850');
  await page.getByPlaceholder(/Who's in the audience/).fill(
    'Mid-career GIS analysts in Southern Africa.',
  );
  // Add a second channel.
  await page.getByRole('button', { name: /\+ Add channel/ }).click();
  const allNameInputs = page.getByPlaceholder(/Acme Newsletter/);
  await allNameInputs.nth(1).fill('GeoSpatial Podcast');
  const allUrlInputs = page.getByPlaceholder(/https:\/\//);
  await allUrlInputs.nth(1).fill('https://geopodcast.example');
}

async function fillApplyPitch(page: Page) {
  await page
    .getByPlaceholder(/2–3 sentences/)
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
// ---------------------------------------------------------------
test.describe.serial('Affiliate apply form', () => {

  test('apply landing + track cards', async ({ page }) => {
    await signIn(page, APPLICANT_EMAIL, APPLICANT_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await page.waitForLoadState('networkidle');
    await saveScreenshot({
      page,
      name: 'apply-landing.png',
      pathSegments: SEGMENT,
      fullPage: false,
    });

    // Element-only shot of the "Choose your track" card.
    const tracks = page.getByRole('heading', { name: 'Choose your track' })
      .locator('xpath=ancestor::div[contains(@class, "chakra-card")]');
    await saveScreenshot({
      page,
      name: 'apply-tracks.png',
      pathSegments: SEGMENT,
      target: tracks,
      padding: 8,
    });
  });

  test('your details + channels + pitch + components', async ({ page }) => {
    await signIn(page, APPLICANT_EMAIL, APPLICANT_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await page.waitForLoadState('networkidle');

    await fillApplyDetails(page);
    const detailsCard = page.getByRole('heading', { name: 'Your details' })
      .locator('xpath=ancestor::div[contains(@class, "chakra-card")]');
    await saveScreenshot({
      page,
      name: 'apply-details.png',
      pathSegments: SEGMENT,
      target: detailsCard,
      padding: 8,
    });

    await fillApplyChannels(page);
    const channelsBlock = page
      .getByRole('heading', { name: 'Distribution channels' })
      .locator('xpath=ancestor::div[contains(@class, "chakra-stack")][1]/..');
    await saveScreenshot({
      page,
      name: 'apply-channels.png',
      pathSegments: SEGMENT,
      target: channelsBlock,
      padding: 8,
    });

    await fillApplyPitch(page);
    const pitchBlock = page
      .getByRole('heading', { name: 'Pitch' })
      .locator('xpath=ancestor::div[contains(@class, "chakra-stack")][1]/..');
    await saveScreenshot({
      page,
      name: 'apply-pitch.png',
      pathSegments: SEGMENT,
      target: pitchBlock,
      padding: 8,
    });

    // Trainer-only Components block — switch tracks first.
    await page.getByText(/Certified Trainer/).first().click();
    await page.getByLabel(/^QGIS$/).check();
    await page.getByPlaceholder(/portfolio, LMS completion/).fill(
      'https://lms.kartoza.com/certificates/qgis-trainers/tim-sutton',
    );
    await page.getByLabel(/^PostGIS$/).check();
    const componentsBlock = page
      .getByRole('heading', { name: /Components you're applying/ })
      .locator('xpath=ancestor::div[1]');
    await saveScreenshot({
      page,
      name: 'apply-components.png',
      pathSegments: SEGMENT,
      target: componentsBlock,
      padding: 8,
    });
  });

  // Decision panel — uses submitter_demo so the previous tests stay
  // re-runnable. submitter_demo's Affiliate row is wiped at the start
  // of every screenshot run by the fixture command.
  test('approved decision panel', async ({ page }) => {
    await signIn(page, SUBMITTER_EMAIL, SUBMITTER_PASSWORD);
    await page.goto('/#/affiliate-apply');
    await page.waitForLoadState('networkidle');
    await fillApplyDetails(page);
    await fillApplyChannels(page);
    await fillApplyPitch(page);
    // Acceptances.
    await page.getByRole('checkbox', { name: /partner agreement/i }).check();
    await page.getByRole('checkbox', { name: /code of conduct/i }).check();
    await page.getByRole('checkbox', { name: /brand-fit/i }).check();
    await page.getByRole('button', { name: 'Submit application' }).click();
    // Wait for the decision panel to render.
    await expect(
      page.getByRole('heading', { name: /Decision/i }).or(
        page.getByText(/Approved|Flagged|Rejected/i)
      ),
    ).toBeVisible({ timeout: 10_000 });
    await saveScreenshot({
      page,
      name: 'apply-decision-approved.png',
      pathSegments: SEGMENT,
      fullPage: false,
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
  await saveScreenshot({
    page,
    name: 'dashboard-overview.png',
    pathSegments: SEGMENT,
    fullPage: true,
  });
});

test('referrals page — new code modal', async ({ page }) => {
  await signIn(page, RESELLER_EMAIL, RESELLER_PASSWORD);
  await page.goto('/#/partner/referrals');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /new code/i }).click();
  await saveScreenshot({
    page,
    name: 'referrals-new-code.png',
    pathSegments: SEGMENT,
    fullPage: false,
  });
});

test('training components page', async ({ page }) => {
  await signIn(page, TRAINER_EMAIL, TRAINER_PASSWORD);
  await page.goto('/#/partner/training');
  await page.waitForLoadState('networkidle');
  await saveScreenshot({
    page,
    name: 'training-components.png',
    pathSegments: SEGMENT,
    fullPage: true,
  });
});
