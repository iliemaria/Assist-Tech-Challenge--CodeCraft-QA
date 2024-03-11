import {test, expect} from "@playwright/test";


test('TeamFinder Register', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.title()).toEqual('Create Next App');

  await page.getByRole("button", {name: "Register"}).click();

  await page.getByPlaceholder("John Doe").click();
  await page.getByPlaceholder("John Doe").fill("mama mea");
  await page.getByPlaceholder("johnDoe@example.com").click();
  await page.getByPlaceholder("johnDoe@example.com").fill("123456788@gmail.com");
  await page.getByPlaceholder("******").click();
  await page.getByPlaceholder("******").fill("12345678");
  await page.getByPlaceholder("Emaple.Org").click();
  await page.getByPlaceholder("Emaple.Org").fill("EX.Org");
  await page.getByPlaceholder("example street nr:").click();
  await page.getByPlaceholder("example street nr:").fill("ex street nr.10");
  await page.getByRole("button", {name: "Submit"}).click();
});

