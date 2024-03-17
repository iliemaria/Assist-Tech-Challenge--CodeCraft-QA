import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Dashboard - Team roles - Add new role", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Team roles").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Assign Team Roles for your Organization");
  await page.locator("input[placeholder='Team role']").fill("Automation Tester");
  await page.locator("button >> text=Submit").click();
  await waitAndVerifyIsVisible(page, ".bg-slate-100 span >> text=Automation Tester");
});
