import test, {page, expect} from '@playwright/test';

test('selectors demo', async ({page}) =>{
await page.goto('https://kitchen.applitools.com/')
await page.pause()

// Assertions
// check element present or not
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

const heading = page.getByRole('heading', { name: 'The Kitchen' });

 if(await heading.count>0){
    await heading.click()
 }

//  check element hidden or visible
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

// check element enabled or disabled

await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

// check text
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
// await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen')

// check attribute value
await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a') 

// check page url and Title
await expect(page).toHaveURL('https://kitchen.applitools.com/')
await expect(page).toHaveTitle(/.*Kitchen/)

// visula validation with screenshot
await expect(page).toHaveScreenshot()



})