import { test, expect } from '@playwright/test';
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").type("anshika@gmail.com");
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });  // taking all contents- cookies,session,localstorage etc into one variable
    webContext = await browser.newContext({ storageState: "state.json" });  // create a new context and give the storage details to it
})
test("Ecommerce order", async () => {
    const page = await webContext.newPage();         // page of newcontext is created
    await page.goto("https://rahulshettyacademy.com/client/");
    const products = page.locator(".card-body");
    const productNeeded = "zara coat 3";
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    console.log(count);


    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() === productNeeded) {   //search restricted to scope of location of this product 
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
    console.log(bool);

})
