import { test as setup, expect } from '@playwright/test';

let url = '/';

// Fill in your credentials here
// Don'nt push this file with real credentials
let user_email = process.env.GSH_USERNAME;
let password = process.env.GSH_PASSWORD;
const authFile = 'auth.json';


setup.describe('login', () => {

  setup('login', async ({page}) => {

    // Go to the base URL
    await page.goto(url);
    // Check if the page has loaded
    await expect(page).toHaveURL(url);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('textbox', { name: 'Email' }).click();

    await page.getByRole('textbox', { name: 'Email' }).fill(user_email);

    await page.getByRole('textbox', { name: 'Password' }).click();

    await page.getByRole('textbox', { name: 'Password' }).fill(password);

    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByRole('button', { name: 'Dashboard' })).toBeVisible();

    await page.context().storageState({ path: authFile });

  });

});
