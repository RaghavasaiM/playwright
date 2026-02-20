import {test, expect} from '@playwright/test'

test('selectors demo', async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.pause()

    //using any object property
    // await page.click('id=username')
    await page.locator('id=username').fill('student')
   
    //using xpath
    await page.locator('//input[@name="password"]').fill("Password123")

    //using CSS selector
    await page.locator('#submit').click()
    
    // //using Text
    // await page.locator('#Submit').click()

})

