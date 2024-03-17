import {test, expect} from "@playwright/test";
import {appURL, testerPassword, testerUsername} from "../helper/helper";

test("TeamFinder Register", async ({page}) => {
  await page.goto(appURL);
  await page.waitForSelector("h1 >> text=Team Finder");

  expect(await page.title()).toEqual("Create Next App");

  await page.getByRole("button", {name: "Register"}).click();

  await page.getByPlaceholder("John Doe").fill("mama mea");
  await page.getByPlaceholder("johnDoe@example.com").fill(testerUsername);
  await page.getByPlaceholder("******").fill(testerPassword);
  await page.getByPlaceholder("Emaple.Org").fill("EX.Org");
  await page.getByPlaceholder("example street nr:").fill("ex street nr.10");
  await page.getByRole("button", {name: "Submit"}).click();
});
