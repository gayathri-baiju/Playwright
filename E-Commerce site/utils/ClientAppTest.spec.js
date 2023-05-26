import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';
import { DashboardPage } from '../pageobjects/DashboardPage';

// convert json -> string -> javascript object
//const {dataSet}= JSON.stringify(JSON.parse(require("../utils/clientAppTestData.json")));   

test("ecommerce buy product", async ({ page }) =>
 {

     const username = "anshika@gmail.com";
     const password = "Iamking@000";
     const products = page.locator(".card-body");
    const productName = "zara coat 3";
    //const pomManager= new POManager();

    const loginPage = new LoginPage(page);
    await loginPage.gotoUrl();
    await loginPage.validLogin(username,password);

     const dashboardPage= new DashboardPage(page);
     await dashboardPage.searchProductAddToCart(productName);
     await dashboardPage.navigateToCart();
    
   
    
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    console.log(bool);
    expect(bool).toBeTruthy();
    await page.locator("//button[text()='Checkout']").click();

    //handlind autosuggestive dropdown
    await page.locator("[placeholder='Select Country']").type("ind", { delay: 100 });  //slowly typing text 'ind'
    const options = page.locator(".ta-results");
    await options.waitFor();                                          //wait till all related options are displayed
    const optionsCount = await options.locator("button").count();     // button tags  within the selected options are selected
    console.log(optionsCount);
    for (let i = 0; i < optionsCount; i++) {                               // iterated to select the desired country using text attribute
        const text = await options.locator("button").nth(i).textContent();
        if (text === " India") {
            await options.locator("button").nth(i).click();
            break;
        }
    }
    //await page.pause();
    await expect(page.locator(".user__name input[type='text']")).toHaveValue(username);
    await page.locator("a.action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
    await page.locator("button[routerlink*='/dashboard/myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr.ng-star-inserted ");
    const totalOrderIds = await rows.count();
    console.log(totalOrderIds);
    for (let i = 0; i < totalOrderIds; i++) {
        const id = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(id)) {
            await rows.nth(i).locator("button").first().click();
        }
    }
    const idLocator = page.locator("div.col-text.-main");
    const idDisplayed = await idLocator.textContent();

    expect(orderId.includes(idDisplayed)).toBeTruthy();

})