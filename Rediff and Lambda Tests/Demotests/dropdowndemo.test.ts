import { test, expect } from '@playwright/test'

//single select dropdown
test('handling dropdown', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("id=select-demo", {
        //label:"Tuesday"
        //value:"Friday"
        index: 5

    });
    await page.waitForTimeout(5000);
})
//Multiselect dropdown
test('Multiselect dropdown', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("#multi-select", [{
        label: "Texas"
    }, {
        index: 2
    }, {
        value: "Washington"
    }
    ])
    await page.waitForTimeout(5000);
})
//Bootstrap  Dropdown
test.only('bootstrap Dropdown', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.click("#country+span");
    await page.locator("ul#select2-country-results").locator("li",{
        hasText: "India"
    }).click();
    
    await page.waitForTimeout(5000);
})
