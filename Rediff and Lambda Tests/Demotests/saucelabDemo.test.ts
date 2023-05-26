import {test,expect} from '@playwright/test';
test("Order a product demo",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.click("#login-button");

    await page.selectOption("//select[@class='product_sort_container']","za");
    await page.click("//img[@alt='Test.allTheThings() T-Shirt (Red)']");
    await page.click("//button[text()='Add to cart']");
    await page.click("#back-to-products");
    await page.click("#shopping_cart_container");
    await page.click("#checkout");

    await page.locator("#first-name").fill("Gayathri");
    await page.locator("#last-name").fill("B");
    await page.locator("#postal-code").fill("4566");
    await page.click("#continue");
    await page.click("#finish");
    const confirmationText=page.locator("//h2[text()='Thank you for your order!']");
    expect(confirmationText).toHaveText("Thank you for your order!");
 



})