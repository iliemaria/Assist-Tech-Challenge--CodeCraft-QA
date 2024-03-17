import {expect, test} from "@playwright/test";
import {appURL, waitAndVerifyIsVisible} from "../helper/helper";

test("TeamFinder About page - Team members", async ({page}) => {
  await page.goto(appURL + "about");
  expect(await page.title()).toEqual("Create Next App");
  await waitAndVerifyIsVisible(page, "h1 >> text=About us");
  await waitAndVerifyIsVisible(page, "h3 >> text=Andreea Elena Dinco");
  await waitAndVerifyIsVisible(page, "h3 >> text=Mihai Alexandru Pricob");
  await waitAndVerifyIsVisible(page, "h3 >> text=Florin Camarut");
  await waitAndVerifyIsVisible(page, "h3 >> text=Stefan Alexandru Cozloschi");
  await waitAndVerifyIsVisible(page, "h3 >> text=Maria Ilie");
});
