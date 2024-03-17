import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Dashboard - Departments-Organization Members", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Organization Members").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Organization Members");
  await page.locator("p >> text=Alice Johnson").click();
  await page.waitForSelector("h1 >> text=Chose sytem roles for user:");
  await waitAndVerifyIsVisible(page, "p >> text=Alice Johnson");
  await waitAndVerifyIsVisible(page, "h1 >> text=Chose sytem roles for user: Alice Johnson");
  await page.locator(".css-13cymwt-control >> text=Select...").click();
});
