import { Page, Locator, expect } from '@playwright/test'

export class AddSkill {
    skillsMenu: Locator;
    addSkillButton: Locator;
    skillPopup: Locator;
    skillname: Locator;
    parentDropdown: Locator;
    parentSkill: Locator;
    skillDescription: Locator;
    saveButton: Locator;
    cancelButton: Locator;
    errorMessage: Locator;
    toastMessage:Locator;
   
    

    constructor(public page: Page) {
        this.page = page;
       
        this.skillsMenu = page.locator("//span[text()='Skills']");
        this.addSkillButton = page.locator("//button[text()='Add Skill']");
        this.skillname = page.locator("#skill");
        this.parentSkill = page.locator("//div[@title='Advanced Computer Skills']");
        this.parentDropdown = page.locator("div#skillParent>span");
        this.saveButton = page.locator("button[aria-label='Save']");
        this.skillPopup = page.locator(".p-dialog.skill-popup");
        this.skillDescription = page.locator("#skillDescription");
        this.cancelButton = page.locator("button[aria-label='Cancel']");
        this.errorMessage = page.locator("(//small[@class='form-control-error'])[1]");
        this.
    }
    async addSkill(skill: string) {
        await this.skillsMenu.click();
        await this.addSkillButton.click();
        await this.skillname.fill(skill);
        await this.parentDropdown.click();
        await this.parentSkill.click();
        await this.saveButton.click();
        await this.page.pause();

    }
    async addSkillFieldValidations() {
        await this.skillsMenu.click();
        await expect(this.addSkillButton).toBeVisible();
        await this.addSkillButton.click();
        await expect(this.skillPopup).toBeVisible();
        expect(this.skillname).toBeTruthy();
        expect(this.parentSkill).toBeTruthy();
        expect(this.skillDescription).toBeTruthy();
        expect(this.saveButton).toBeTruthy();
        expect(this.cancelButton).toBeTruthy();
        await this.page.pause();


    }
    async mandatoryCheckAddSkill() {
        const errorMessagetodisplay = "Skill is required";
        await this.skillsMenu.click();
        await this.addSkillButton.click();
        
        // keeping skillname and parent fields blank and clicking Save button
        await this.saveButton.click();
        const errorMsg = await this.errorMessage.textContent();

        // verify if error message is displayed, not empty and equal to expected
        await expect(this.errorMessage).toBeVisible();
        expect(errorMsg).not.toBe('');
        expect(errorMsg).toContain(errorMessagetodisplay);

    }
    async skillNameBoundaryCheck(skill:string){
        const errorMessagetodisplay = "Skill name must not exceed 25 characters";
        await this.skillsMenu.click();
        await this.addSkillButton.click();  
        await this.skillname.fill(skill);   
        await this.saveButton.click();
        const errorMsg = await this.errorMessage.textContent();
        await expect(this.errorMessage).toBeVisible();
        expect(errorMsg).not.toBe('');
        expect(errorMsg).toContain(errorMessagetodisplay);
        await this.page.pause();
    }
}