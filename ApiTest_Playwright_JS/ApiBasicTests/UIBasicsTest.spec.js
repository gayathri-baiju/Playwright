import { test, expect } from '@playwright/test'
test('Browser contexttest', async ({ browser }) => {
     const context = await browser.newContext();                     //create an instance
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Page fixture test', async ({ page }) => {
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
     const userName = page.locator("#username");
     const password = page.locator("#password");
     const allTitles = page.locator(".card-body a");
     await userName.fill("rahulshettyacademy");
     await password.fill("learning");

     // const errorMessage=page.locator("[style*='block']");              //Confirming the error message when fields kept empty
     // console.log(errorMessage.textContent());
     // await expect(errorMessage).toContainText("Empty username/password.");

     //when multiple elements are matching
     //  const titleOfFirst=await allTitles.nth(0).textContent();    
     //  console.log(titleOfFirst);

     //  const title=await allTitles.first().textContent();     //or can use this method to get first title
     //  console.log(title);

     //Getting all product titles
     // race condition
     await Promise.all([
          page.waitForNavigation(),                               //first click is performed then wait. As they are related they are wrapped in to a promise
          page.locator("#signInBtn").click()
     ])
     //  await page.waitForLoadState('networkidle');    //only work for service oriented sites - network calls are made 

     console.log(await allTitles.allTextContents());   // it won't wait until text are attached  
});
test('UI Demo Test', async ({ page }) => {
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const userName = page.locator("#username");
     const password = page.locator("#password");
     const dropdown = page.locator("select.form-control");
     const doclink = page.locator("[href*='documents-request']")
     await dropdown.selectOption("consult");

     const radioButton = page.locator("[value='user']")
     await radioButton.click();
     await page.locator("#okayBtn").click();
     console.log(await radioButton.isChecked());

     //assertion
     await expect(radioButton).toBeChecked();
     const checkBox = page.locator("#terms");
     await checkBox.click();
     await expect(checkBox).toBeChecked();
     await checkBox.uncheck();
     //await page.pause();
     //await expect(checkBox).not.toBeChecked();
     expect(await (checkBox).isChecked()).toBeFalsy();
     //expect (await page.locator("#terms").isChecked()).toBeFalsy();

     //blinking value - always have class value as 'blinkingtext'
     await expect(doclink).toHaveAttribute("class", "blinkingText");
});

test.only(" Child window handling", async ({ browser }) => {
     const context = await browser.newContext();
     const page = await context.newPage();
     const userName = page.locator("#username");
     const doclink = page.locator("[href*='documents-request']");
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     const [newPage] = await Promise.all
          ([
               context.waitForEvent('page'),
               doclink.click(),
               
          ])
       await expect(newPage).toHaveTitle("RS Academy");
       const text= await newPage.locator("[class='im-para red']").textContent();
       console.log(text);
       const arrayText=text.split("@");
       //console.log(arrayText);
       const domain=arrayText[1].split(" ")[0];
       console.log(domain);
       await userName.fill(domain);
      // await page.pause();
       console.log(await userName.textContent());

          

})
