import {randomInt} from "crypto";
import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Dashboard - Departments", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Departments").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Departments");
  await page.locator("button >> text=Add new department").click();
  await waitAndVerifyIsVisible(page, "form label >> text=Department name");
});

test("Dashboard - Departments-Add new department", async ({page}) => {
  const randomNumber = randomInt(1000);
  await loginSuccessfully(page);
  await page.locator("p >> text=Departments").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Departments");
  await page.locator("button >> text=Add new department").click();
  await waitAndVerifyIsVisible(page, "form label >> text=Department name");
  await page.locator("[placeholder='ex:Front-end']").fill("DepartmentNew" + randomNumber);
  await page.locator("button >> text=Submit").click();
  await waitAndVerifyIsVisible(page, "h3 >> text=DepartmentNew" + randomNumber);
});
