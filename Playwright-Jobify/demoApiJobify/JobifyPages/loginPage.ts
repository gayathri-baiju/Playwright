import {Page,Locator} from '@playwright/test'

export class Login{
    signinButton:Locator;
    constructor(public page:Page){
        this.page=page;
        this.signinButton=page.locator("button.p-button.p-component ");

    }
    async signIn(email:string,password:string){
        //await this.page.goto("https://ess-training.experionglobal.dev:2000/jobVacancy/view");
        await this.page.goto("https://ess-training.experionglobal.dev:2000/");
    const [newWindow]=await Promise.all([
        this.page.waitForEvent("popup"),
        this.signinButton.click(),
    ])
    //await newWindow.waitForNavigation();
    console.log(newWindow.url());
    await newWindow.fill("input[name='loginfmt']",email);
    await newWindow.click("#idSIButton9");
    await newWindow.fill("input[name='passwd']",password);
    await newWindow.click("#idSIButton9");
    
    await newWindow.getByRole('button', { name: 'Text +XX XXXXXXXX61‎' }).click();
    await newWindow.waitForTimeout(5000);
    
    await newWindow.pause();
    await newWindow.getByRole('menuitem', { name: 'Skills' }).click();
  await newWindow.getByRole('button', { name: 'Add Skill' }).click();
  

    }
}