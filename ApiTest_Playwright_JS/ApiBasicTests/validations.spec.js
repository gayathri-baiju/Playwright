import {test,expect} from '@playwright/test'
test("popup validation",async({page})=>
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://www.google.com/");
// await page.goBack();
// await page.goForward();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
page.on('dialog',async(dialog)=>{
    dialog.accept();
})
await page.locator("#alertbtn").click();
// inside child frame
// const framePage=page.frameLocator("#courses-iframe");
// await framePage.locator("li a[href*='lifetime-access']:visible").click();    // focus on visible element
// const text=await framePage.locator("div.text h2").textContent();
// console.log(text);

})

test.only("screenshot validations",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({path:'partialscreenshot.png'});  //on specific locator
    await page.locator("#hide-textbox").click();
    //await page.screenshot({path: 'screenshot.png'});                               // on page
    await expect(page.locator("#displayed-text")).toBeHidden();
})