import { test } from '@playwright/test';
import path from 'node:path';
import fs from 'node:fs/promises';
import { DOC_SRC } from '../playwright.config';

type Shot = {
    url: string;          // route to visit
    mdDir: string;        // sub-folder under docs/src/ that owns the page
    file: string;         // png filename
    selector?: string;    // optional element locator
};

const SHOTS: Shot[] = [
    // home
    { url: '/', mdDir: '', file: 'home.png' },
    // dashboard
    { url: '/dashboard', mdDir: 'dashboard', file: 'overview.png' },
    { url: '/dashboard/orders', mdDir: 'dashboard', file: 'orders.png'},
    { url: '/dashboard/support', mdDir: 'developer', file: 'support.png' },

    // products
    { url: '/products', mdDir: 'products', file: 'listing.png' },
    // …
];

for (const { url, mdDir, file, selector } of SHOTS) {
    test(`capture ${url} → ${mdDir}/img/${file}`, async ({ page }) => {
        await page.goto(url, { waitUntil: 'networkidle' });

        const imgDir = path.join(DOC_SRC, mdDir, 'img');
        await fs.mkdir(imgDir, { recursive: true });

        const target = selector ? page.locator(selector) : page;
        await target.screenshot({
            path: path.join(imgDir, file),
            fullPage: !selector,
        });
    });
}
