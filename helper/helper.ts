import {Page, expect} from "playwright/test";
export const appURL = "https://assist-tech-challenge-code-craft.vercel.app/";
export const testerUsername = "tester@playwright.com";
export const testerPassword = "automation";

export async function waitAndVerifyIsVisible(page: Page, selector: string) {
  await page.waitForSelector(selector);

  expect(await page.locator(selector).isVisible()).toBeTruthy();
}

export async function loginSuccessfully(page: Page) {
  await page.goto(appURL);
  await page.waitForSelector("h1 >>text= Team Finder");
  expect(await page.title()).toEqual("Create Next App");
  await page.waitForSelector("button >> text=Sign In");
  await page.locator("button >> text=Sign In").click();
  await page.waitForSelector("h1 >> text=Login to your account");
  await page.waitForSelector("label >> text=Email*");
  await page.locator('input[placeholder="johnDoe@example.com"]').fill(testerUsername);
  await page.locator("button >>text=Login").click();
  await page.locator('input[placeholder="******"]').fill(testerPassword);
  await page.locator("button >> text=Login").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Welcome to organization Dashboard");
}
