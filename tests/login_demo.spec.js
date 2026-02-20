import { test, expect } from '@playwright/test'

test('Demo Login', async ({ page }) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('id=username').fill('Raghava')
    await page.locator('[placeholder="Enter your password"]').fill('merupula')

    await page.waitForSelector('[class="btn btn-primary"]', { timeout: 15000 })
    await page.locator('[class="btn btn-primary"]').click()

})

test('Demo Login 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('manda user').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only('Demo Login 3', async ({ page }) => {



    await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('link', { name: 'Log out' }).click();

});