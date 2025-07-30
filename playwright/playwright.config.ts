// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

require('dotenv').config()

/** Repo root = two levels up from this config file */
const REPO_ROOT = path.resolve(__dirname, '..');
/** Absolute path to the docs source tree */
export const DOC_SRC = path.join(REPO_ROOT, 'docs', 'src');

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['html', { open: 'never' }]] : 'html',

  use: {
    /* pick the deployed site by default, overridable per run */
    baseURL: process.env.DOC_SITE_URL || 'https://geohosting.sta.do.kartoza.com/#/',
    viewport: { width: 1920, height: 1080 },
    trace: 'on-first-retry',
    /* let each spec decide when to shoot; default is off */
    screenshot: 'off',
  },

  /* ---------- projects ---------- */
  projects: [
    /* 0. one-time login (creates auth.json) */
    { name: 'setup',  testMatch: /.*\.setup\.ts/ },

    /* 1. main chromium run that depends on the setup project */
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ignoreHTTPSErrors: true,
        storageState: 'auth.json',    // uses the cookie/session from setup
      },
      dependencies: ['setup'],
    },

  ],
});
