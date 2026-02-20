
import{test,expect} from '@playwright/test';
// const {test, expect} = require('@playwright/test')
// const {helloworld}  =require ('./example.spec')
// import{hello} from './demo/hello'

// console.log("Adaf");

// console.log(hello());
// console.log(helloworld());

test('My first test', async({page}) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')

});