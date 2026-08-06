// User-dashboard screenshot capture spec.
//
// Drives the GSH /#/dashboard SPA flows that docs/src/users/dashboard.md
// describes and saves the resulting PNGs into
// docs/src/users/img/ so the docs can show fresh, branded captures
// instead of the stale users-img-N.png set.
//
// Repeatable via:
//   nix run .#take-screenshots                 (recommended)
//
// Expects the dev server on http://localhost:8000 and the
// hosted_demo user seeded by dashboard_seed_screenshot_fixtures.
import { test, expect, Page } from '@playwright/test';
import { saveScreenshot } from '../utils/screenshot';

const SEGMENT = ['users'];

const HOSTED_EMAIL = 'hosted_demo@gsh.test';
const HOSTED_PASSWORD = 'hosted-demo-pass';

// Each test starts a fresh browser context so signin state is clean.
test.use({ storageState: { cookies: [], origins: [] } });

async function signIn(page: Page, email: string, password: string) {
  const response = await page.request.post('/api/auth/login/', {
    data: { email, password },
  });
  if (!response.ok()) {
    throw new Error(
      `signIn(${email}) failed: ${response.status()} ${await response.text()}`,
    );
  }
  const { token } = await response.json();
  await page.addInitScript((t) => {
    window.localStorage.setItem('token', t);
  }, token);
}

test.describe.serial('Dashboard screenshots', () => {

  test('hosted services landing', async ({ page }) => {
    await signIn(page, HOSTED_EMAIL, HOSTED_PASSWORD);
    await page.goto('/#/dashboard');
    await page.waitForLoadState('networkidle');
    // Wait for at least one instance card to render — the seeded
    // instances ('acme-geoserver', etc.) all start with 'acme-'.
    await expect(page.getByText(/acme-/i).first()).toBeVisible({
      timeout: 15_000,
    });
    await saveScreenshot({
      page,
      name: 'dashboard-hosted-services.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

  test('instance detail', async ({ page }) => {
    await signIn(page, HOSTED_EMAIL, HOSTED_PASSWORD);
    await page.goto('/#/dashboard/instances/acme-geoserver');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await saveScreenshot({
      page,
      name: 'dashboard-instance-detail.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

  test('orders list', async ({ page }) => {
    await signIn(page, HOSTED_EMAIL, HOSTED_PASSWORD);
    await page.goto('/#/dashboard/orders');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await saveScreenshot({
      page,
      name: 'dashboard-orders.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

  test('profile', async ({ page }) => {
    await signIn(page, HOSTED_EMAIL, HOSTED_PASSWORD);
    await page.goto('/#/dashboard/profile');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await saveScreenshot({
      page,
      name: 'dashboard-profile.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

  test('support list', async ({ page }) => {
    await signIn(page, HOSTED_EMAIL, HOSTED_PASSWORD);
    await page.goto('/#/dashboard/support');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    await saveScreenshot({
      page,
      name: 'dashboard-support.png',
      pathSegments: SEGMENT,
      fullPage: true,
    });
  });

});
