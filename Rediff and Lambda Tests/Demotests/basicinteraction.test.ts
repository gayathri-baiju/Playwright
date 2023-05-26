import {expect,test} from '@playwright/test';
test('test1',async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
const inputMessage=page.locator("//input[@id='user-message']");
await inputMessage.scrollIntoViewIfNeeded();    //scroll down to see the placeholder text 
console.log(await inputMessage.getAttribute("placeholder"));
expect(inputMessage).toHaveAttribute("placeholder","Please enter your Message");
console.log('Before entering data: '+await inputMessage.inputValue());
await inputMessage.type("Hi Gayathri");
console.log('After entering data: '+await inputMessage.inputValue());
});

test('Sum test',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sumInput= page.locator("//input[@id='sum1']");
    const sumInput2=page.locator("//input[@id='sum2']");
    const getValuesButton=page.locator("//button[text()='Get values']");
    let num1=123;
    let num2=345;
    await sumInput.type("" + num1);
    await sumInput2.type(""+ num2);
    await getValuesButton.click();
    const result =page.locator("#addmessage");               //used css selector
    console.log(await result.textContent());                //similar to getText() of selenium
    let expectedResult=num1 + num2;
    expect(result).toHaveText(""+ expectedResult);
})
test.only('Checkbox Interaction',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox=page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();


})
