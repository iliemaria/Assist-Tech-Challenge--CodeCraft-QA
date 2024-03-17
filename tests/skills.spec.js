import {test} from "@playwright/test";
import {loginSuccessfully, waitAndVerifyIsVisible} from "../helper/helper";

test("Skills - Add new skill", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Skills").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Department Skills");
  await page.locator("input[placeholder='ex:Back-end']").fill("Ochi de soacra");
  await page.locator("button >> text=Create new").click();
  await waitAndVerifyIsVisible(
    page,
    ".text-codeCraft-900 .text-codeCraft-500 >> text=Ochi de soacra"
  );
});

test("Skills - Edit skill", async ({page}) => {
  await loginSuccessfully(page);
  await page.locator("p >> text=Skills").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Department Skills");
  await page.locator("input[placeholder='ex:Back-end']").fill("TESTING");
  await page.locator("button >> text=Create new").click();
  await waitAndVerifyIsVisible(page, ".text-codeCraft-900 .text-codeCraft-500 >> text=TESTING");
  await page.locator(".text-codeCraft-900 .text-codeCraft-500 >> text=TESTING").click();
  await waitAndVerifyIsVisible(page, "h1 >> text=Add new skill to TESTING category");
  await page.locator("input[placeholder='ex:Front-end']").fill("Tester");
  await page.locator("input[placeholder='ex:React']").fill("Playwright");
  await page.locator("button >> text=Add skill").click();
  await waitAndVerifyIsVisible(page, "p >> text=Skill name: Tester");
  await waitAndVerifyIsVisible(page, "p >> text=Skill description: Playwright");
});
