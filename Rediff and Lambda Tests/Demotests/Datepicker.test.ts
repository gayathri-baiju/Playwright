import {expect,test} from '@playwright/test'
test('Datepicker handling  usinf Fill',async({page})=>{
page .goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
let date="03-09-2023";
await page.fill("id=birthday","date");
await page.waitForTimeout(5000);

})
test('Datepicker handling using moment',async({page})=>{
    page.goto("");
    let date="";
    await page.click("//input[@placeholder='Start date']");
    await page.waitForTimeout(5000);
    
    })

