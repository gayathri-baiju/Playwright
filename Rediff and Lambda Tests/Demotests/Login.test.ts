import{chromium, test} from '@playwright/test';

test('Login test demo',async()=>{
    const browser=await chromium.launch({headless: false});      //gives a browser instance
    const context=await browser.newContext();    //
     const page= await context.newPage();
     await page.goto("https://ecommerce-playground.lambdatest.io/"); 

     await page.hover("//a[@data-toggle='dropdown']//span[contains(. ,'My account')]");
     await page.click("text=Login");
     // await page.click("'Login'");   // also can write like this for text
     await page.fill("//input[@name='email']","koushik350@gmail.com");
     await page.fill("//input[@name='password']","Pass123$");
     await page.click("//input[@value='Login']");
     await page.waitForTimeout(5000);

    const newContext= await browser.newContext();                     //new browser opened 
    const newpage= await newContext.newPage();                        //new tab created
    await newpage.goto("https://ecommerce-playground.lambdatest.io/");   
    await newpage.waitForTimeout(5000);




})
