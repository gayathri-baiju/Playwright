
import { test, expect, chromium } from '@playwright/test';
test('Slowmotion and video demo', async () => {

    //Launch browser
    const browser = await chromium.launch
        ({
            slowMo: 500,
            headless: false
        });

    //create a new incognito browser context
    const context = await browser.newContext
        ({
            recordVideo:
            {
                dir: 'videos/',
                size: { width: 800, height: 600 }
            }
        });

    // create a new page inside context
    const page = await context.newPage();
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await context.close();

})