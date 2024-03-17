import {test, expect} from "@playwright/test";
import {appURL, testerPassword, testerUsername, waitAndVerifyIsVisible} from "../helper/helper";

test("TeamFinder Login - Invalid Credentials", async ({page}) => {
  await page.goto(appURL);
  await page.waitForSelector("h1 >> text=Team Finder");

  expect(await page.title()).toEqual("Create Next App");

  await page.getByRole("button", {name: "Sign In"}).click();

  await page.getByPlaceholder("johnDoe@example.com").click();
  await page.getByPlaceholder("johnDoe@example.com").fill(testerUsername);
  await page.getByPlaceholder("******").click();
  await page.getByPlaceholder("******").fill("InvalidPassword");
  await page.getByRole("button", {name: "Login"}).click();

  await page.waitForSelector("p >> text=Invalid credentials!");

  expect(await page.locator("p >> text=Invalid credentials!").isVisible()).toBeTruthy();
});

test("TeamFinder Login - Redirect to register", async ({page}) => {
  await page.goto(appURL);
  await page.waitForSelector("h1 >> text=Team Finder");

  expect(await page.title()).toEqual("Create Next App");

  await page.getByRole("button", {name: "Sign In"}).click();

  await page.locator("a >> text=Register").click();

  await page.waitForSelector("h1 >> text=Register New Organization");

  expect(await page.locator("h1 >> text=Register New Organization").isVisible()).toBeTruthy();
});

test("TeamFinder Login - Insufficient characters", async ({page}) => {
  await page.goto(appURL);
  await page.waitForSelector("h1 >> text=Team Finder");

  expect(await page.title()).toEqual("Create Next App");

  await page.getByRole("button", {name: "Sign In"}).click();

  await page.getByPlaceholder("johnDoe@example.com").fill(testerUsername);
  await page.getByRole("button", {name: "Login"}).click();
  const passwordLengthIncorrect = "p >> text=Password length should be at least 8 characters long!";
  await page.waitForSelector(passwordLengthIncorrect);

  expect(await page.locator(passwordLengthIncorrect).isVisible()).toBeTruthy();
});

test("Team Finder App-log in errors", async ({page}) => {
  await page.goto(appURL);
  await page.waitForSelector("h1 >>text= Team Finder");
  expect(await page.title()).toEqual("Create Next App");
  await page.waitForSelector("button >>text=Sign In");
  await page.locator("button >>text=Sign In").click();
  await page.waitForSelector("h1 >> text=Login to your account");
  await page.waitForSelector("label >> text=Email*");
  await page.locator('input[placeholder="johnDoe@example.com"]').fill(testerUsername);
  await page.locator("button >>text=Login").click();
  await waitAndVerifyIsVisible(
    page,
    "p >>text=Password length should be at least 8 characters long!"
  );
  await page.locator('input[placeholder="******"]').fill("AValidLengthPassword");
  await page.locator("button >>text=Login").click();
});

test("Login with success", async ({page}) => {
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
