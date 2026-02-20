import { test, expect } from '@playwright/test';

test('record demo test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1769233679705&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('property das');
});