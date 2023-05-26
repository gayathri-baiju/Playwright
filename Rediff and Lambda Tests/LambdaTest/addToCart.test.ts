import{expect, test} from '@playwright/test';
import RegisterPage from '../pages/registerPage';
import LoginPage from '../pages/loginPage';

// test.use({
//         browserName: "firefox"
//      })
test("Register Test",async({page,baseURL})=>{
    
const register= new RegisterPage(page);
await page.goto(`${baseURL}route=account/register`);
await register.enterFirstName("Gayathri");
await register.enterLastName("B");
await register.enterEmail("gayathri@gmail.com");
await register.enterTelephone("8765432832");
await register.enterPassword("gayu@123");
await register.enterConfirmPassword("gayu@123");
expect (register.isSubscribeChecked()).toBeChecked();
 
await register.clickTerms();
await register.clickContinueToRegister();
})

test("Login Test",async({page,baseURL})=>{
const login =new LoginPage(page);
await page.goto(`${baseURL}route=account/login`);
await login.enterEmail("gayathri@gmail.com");
await login.enterLoginPassword("gayu@123");
await login.clickLoginButton();
expect(await page.title()).toBe("My Account");
})