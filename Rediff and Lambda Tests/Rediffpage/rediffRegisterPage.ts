import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
export default class RegisterPage{
    constructor(public page: Page){

    }
    async enterFullName(fullName: string){
        await this.page.locator("(//table[@class='f14']//input)[1]").type(fullName);
    }
    async enterRediffId(rediffId: string){
        await this.page.locator("(//table[@class='f14']//input)[2]").type(rediffId);
    }
    
    async enterPassword(password: string){
        await this.page.locator("#newpasswd").fill(password);
        const passLength=password.length;

        //Checking if pass lenghth is between 8 and 100
        //expect(password).toHaveLength(10);
        expect(passLength).toBeGreaterThanOrEqual(8);
        expect(passLength).toBeLessThanOrEqual(100);

        //Checking if pass contains upper case and lower case
        const containsUpperCase=/[A-Z]/.test(password);
        const containsLowerCase=/[a-z]/.test(password);
        expect(containsLowerCase&& containsUpperCase).toBeTruthy();

        //Checking if pass contains atleast one numeric character
        expect(password).toMatch(/\d+/);
        //const hasNumericChar=/\d/.test(password);
        //expect(hasNumericChar).toBeTruthy();

        //Checking if pass contains atleast one special characters
         const hasSpecialChar=/[!@#$%^&*(),.?":{}|<>]/.test(password);
         expect(hasSpecialChar).toBeTruthy();

         //Checking if pass does not contain rediff id or full name
         expect(password).not.toContain("Gayathri"||"Baiju");
    }
    
    async enterRetypePassword(password: string){
        await this.page.locator("#newpasswd1").fill(password);
    }
    // async enterEmailAddress(email: string){
    //     await this.page.locator("//div[@id='div_altemail']/table/tbody/tr/td[3]/input").type(email);
    // }
    async clickCheckbox(){
        await this.page.check("//input[@type='checkbox']");
        await this.page.waitForTimeout(2000);
    }
    async enterSecurityQuesDetails(){
        await this.page.selectOption("//select[contains(@name,'hint')]",{label:'What is your favourite food?'});
        await this.page.fill("(//input[@type='password'])[3]","Steak");
        await this.page.fill("//input[contains(@name,'mothername')]","Sandhyasha N N")
    }
    async enterCountryId(){
     await this.page.locator("#lbl_txt").click();
     await this.page.locator("//li[text()='India (+91)']").click();
    }
    async selectDay(){
       // await this.page.locator(").click();
        await this.page.selectOption("//select[contains(@name,'DOB_Day')]","08");
    }
    async selectMonth(){
        await this.page.selectOption("//select[contains(@name,'DOB_Month')]",{label:'MAY'});
    }
    async selectYear(){
        await this.page.selectOption("//select[contains(@name,'DOB_Year')]",{label:'2023'});  
    }
     async selectGenderRadioButton(){
       await this.page.check("//input[@value='f']");
    }
    isgenderRadioButtonChecked(){
        return this.page.locator("//input[@value='f']");
     }

    async selectCity(){
        await this.page.selectOption("//select[contains(@name,'city')]",{label:'Cochin'});
    }
    async clickCreateButton(){
        this.page.on("dialog",async(alert)=>{
        const text =alert.message();
        console.log(text);
        await this.page.waitForTimeout(3000);
        await alert.accept();
        })
        await this.page.click("#Register");
        
    }
    
    
}