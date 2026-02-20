import {test, expect, chromium} from '@playwright/test'

test('Slow motion and video recording demo',async() => {

    // launch browser
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    // create a context for browser
    const context = await browser.newContext({
        recordVideo:{
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });

    // create a new page inside context
    const page = await context.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
    await page.getByRole('button', { name: 'Submit' }).click();

    // Dispose context once it is no longer needed
    await context.close();

})