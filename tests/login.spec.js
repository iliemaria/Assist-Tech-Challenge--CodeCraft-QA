import { test, expect } from "@playwright/test";
import { Sign } from "crypto";
import { text } from "stream/consumers";


test('TeamFinder Login - Invalid Credentials', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.title()).toEqual('Create Next App');

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByPlaceholder("johnDoe@example.com").click();
  await page.getByPlaceholder("johnDoe@example.com").fill("123456788@gmail.com");
  await page.getByPlaceholder("******").click();
  await page.getByPlaceholder("******").fill("12345678");
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForSelector('p >> text=Invalid credentials!');

  expect(await page.locator('p >> text=Invalid credentials!').isVisible()).toBeTruthy();
});

test('TeamFinder Login - Redirect to register', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.title()).toEqual('Create Next App');

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.locator('a >> text=Register').click();

  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.locator('h1 >> text=Team Finder').isVisible()).toBeTruthy();
});

test('TeamFinder Login - Insuficient characters', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.title()).toEqual('Create Next App');

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByPlaceholder("johnDoe@example.com").click();
  await page.getByPlaceholder("johnDoe@example.com").fill("123456788@gmail.com");
  await page.getByRole("button", { name: "Login" }).click();
  const Passwordlenghtincorect = 'p >> text=Password length should be at least 6 characters long!';
  await page.waitForSelector(Passwordlenghtincorect);

  expect(await page.locator(Passwordlenghtincorect).isVisible()).toBeTruthy();
});

test('TeamFinder Login - ', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >> text=Team Finder');

  expect(await page.title()).toEqual('Create Next App');

  await page.getByRole("button", { name: "Sign In" }).click();

  await page.getByPlaceholder("johnDoe@example.com").click();
  await page.getByPlaceholder("johnDoe@example.com").fill("123456788@gmail.com");
  await page.getByPlaceholder("******").fill("1234567");
  await page.getByRole("button", { name: "Login" }).click();
  const invalidCredentials = 'p >> text=Invalid credentials!';
  await page.waitForSelector(invalidCredentials);

  expect(await page.locator(invalidCredentials).isVisible()).toBeTruthy();
});
/*
Intra pe pagina, da click pe login
verifica ca apare textul "login yo your account"
completeaza email
da click pe login
verifica ca apare password lenth etc
completeza parola cu "parolamea"
da click pe login
verifica ca nu apare passwrod length etc
verifica ca apare invalid credentials
*/
test('Team Finder App-log in errors', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.waitForSelector('h1 >>text= Team Finder');
  expect(await page.title()).toEqual("Create Next App");
  await page.waitForSelector('button >>text=Sign In');
  await page.locator('button >>text=Sign In').click();
  await page.waitForSelector('h1 >> text=Login to your account');
  await page.waitForSelector('label >> text=Email*');
  await page.locator('input[placeholder="johnDoe@example.com"]').fill('email@example.io');
});