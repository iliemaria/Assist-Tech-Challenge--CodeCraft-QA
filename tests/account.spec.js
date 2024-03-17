import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Account Page", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Account").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Account page");
  await waitAndVerifyIsVisible(page, "p >> text=Name: Playwright Automation");
  await waitAndVerifyIsVisible(page, "p >> text=Email: tester@playwright.com");
});
