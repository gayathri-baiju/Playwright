import { Page } from "@playwright/test";

export default class RegisterPage {
    constructor(public page: Page) {

    }
    async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname").type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator("input[name='lastname']").type(lastname);
    }

    async enterEmail(email: string) {
        await this.page.locator("input[name='email']").type(email);
    }

    async enterTelephone(phone: string) {
        await this.page.locator("input[name='telephone']").type(phone);
    }

    async enterPassword(password: string) {
        await this.page.locator("input[name='password']").type(password);
    }

    async enterConfirmPassword(password: string) {
        await this.page.locator("input[name='confirm']").type(password);
    }
     isSubscribeChecked(){
        return this.page.locator("#input-newsletter-no");
    }
    async clickTerms(){ 
        await this.page.click("//label[@for='input-agree']");
    }
    async clickContinueToRegister(){
        await Promise.all([
            this.page.waitForURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/register"),
            await this.page.click("input[value='Continue']")
        ]);
        
    }
} 