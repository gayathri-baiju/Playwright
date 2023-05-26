import { test, expect, request } from '@playwright/test';
import { ApiUtils } from '../utils/apiUtils';

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
const orderpayload = { orders: [{ country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] }
let response;


test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response=await apiUtils.createOrder(orderpayload);

});


test("ecommerce buy product", async ({ page }) => {


    // injecting token in local storage
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    },response.token);
    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator("button[routerlink*='/dashboard/myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr.ng-star-inserted ");
    const totalOrderIds = await rows.count();
    console.log(totalOrderIds);
    for (let i = 0; i < totalOrderIds; i++) {
        const id = await rows.nth(i).locator("th").textContent();
        if (response.orderId.includes(id)) {
            await rows.nth(i).locator("button").first().click();
        }
    }
    const idLocator = page.locator("div.col-text.-main");
    const idDisplayed = await idLocator.textContent();

    expect(response.orderId.includes(idDisplayed)).toBeTruthy();

})