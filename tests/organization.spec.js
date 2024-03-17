import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Dashboard - Departments-Organization Members", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Organization Members").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Organization Members");
  await page.locator("p >> text=Playwright Automation").click();
  await page.waitForSelector("h1 >> text=Chose system roles for user:");
  await waitAndVerifyIsVisible(page, "p >> text=Playwright Automation");
  await waitAndVerifyIsVisible(
    page,
    "h1 >> text=Chose system roles for user: Playwright Automation"
  );
});
