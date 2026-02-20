import { test, expect } from '@playwright/test'

test.describe('All my Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        // await page.close()

    })

    test.afterEach(async ({ page }) => {
        await page.close()
    })

    test('homepage', async ({ page }) => {

        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('[data-test="login-button"]').click();
        // await page.pause()

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        await page.getByText('It\'s not every day that you').click();
        await page.locator('[data-test="item-5-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        // await page.close()

    })

    test('logout', async ({ page }) => {

        // await page.goto('https://www.saucedemo.com/')
        // await page.locator('[data-test="username"]').fill('standard_user');
        // await page.locator('[data-test="password"]').fill('secret_sauce');
        // await page.locator('[data-test="login-button"]').click();
        // await page.pause()

        await page.locator('div').filter({ hasText: 'Swag Labs' }).nth(5).click();

    })

})