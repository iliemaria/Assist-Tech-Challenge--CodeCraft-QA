import {test, expect} from "@playwright/test";

import {
  appURL,
  loginSuccessfully,
  testerPassword,
  testerUsername,
  waitAndVerifyIsVisible,
} from "../helper/helper";

test("Dashboard - after login, the user is redirected to the main page", async ({page}) => {
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
});

test("Dashboard - the section 'My organization' has all modules", async ({page}) => {
  await loginSuccessfully(page);
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Account");
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Departments");
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Organization Members");
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Team roles");
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Projects");
  await waitAndVerifyIsVisible(page, ".cursor-pointer p >> text=Skills");
});
