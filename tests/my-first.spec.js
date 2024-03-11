// cum am declarat librariile playwright in JS
const { test, expect } = require('@playwright/test')

// cum e mai sus sau mai jos accesezi librariile pt playwright
//import {test, expect} from '@playwright/test'
test('My first-register', async ({ page }) => {

    await page.goto('http://localhost:3000/')
    await expect(page).toHaveTitle('Create Next App')

})