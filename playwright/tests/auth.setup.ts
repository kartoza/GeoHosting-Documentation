import { test as setup, expect } from '@playwright/test';

let url = '/';

let user_email = 'admin@example.com';
let password = 'admin';
const authFile = 'auth.json';


setup.describe('login', () => {

  setup('login', async ({page}) => {

    // Go to the base URL
    await page.goto(url);
    // Check if the page has loaded
    await expect(page).toHaveURL(url);

    await page.context().storageState({ path: authFile });
    
  });

});
