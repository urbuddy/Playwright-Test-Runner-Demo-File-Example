import { test, expect } from '@playwright/test';

test('Wikipedia title', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  await expect(page).toHaveTitle('Wikipedia');
});

test('Search on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');

  await page.type("#searchInput", "world war I");
  await page.click("button[type='submit']");
  const headText = await page.$eval("h1[id='firstHeading'] span", el => el.innerHTML);

  await expect(headText).toBe("World War I");
});