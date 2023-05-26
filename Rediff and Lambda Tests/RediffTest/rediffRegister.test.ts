import {test,expect} from '@playwright/test';
import RegisterPage from '../pages/rediffRegisterPage';

test("Register",async({page})=>{
    const register= new RegisterPage(page);
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    await page.waitForLoadState();
    await register.enterFullName("Gayathri");
    await register.enterRediffId("gayathri@gmail.com");
    await register.enterPassword("Parvathy12@");
    
    
    await register.enterRetypePassword("Gayathri12");
    //await register.enterEmailAddress("gayathri2@gmail.com");
    await register.clickCheckbox();
    await register.enterSecurityQuesDetails();
    await register.enterCountryId();
    await register.selectDay();
    await register.selectMonth();
    await register.selectYear();
    await register.selectGenderRadioButton();
    expect(register.isgenderRadioButtonChecked()).toBeChecked();
    await register.selectCity();
    await register.clickCreateButton();
})