
import { test, expect } from '@playwright/test';
//const { chromium } = require('playwright');

test('record demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.youtube.com/');
  await page.getByRole('button', { name: 'Guide' }).click();
  await page.locator('tp-yt-paper-item').filter({ hasText: 'Home' }).click();

  // ---------------------
  await context.close();
  await browser.close();
});