import { Page, Locator ,expect} from '@playwright/test'

export class AddSkill {
    skillsMenu: Locator;
    addSkillButton: Locator;
    skillname:Locator;
    parentDropdown:Locator;
    parentSkill:Locator;
    saveButton:Locator;

    constructor(public page: Page) {
        this.page = page;
        this.skillsMenu = page.locator("//span[text()='Skills']");
        this.addSkillButton=page.locator("//button[text()='Add Skill']");
        this.skillname=page.locator("#skill");
        this.parentSkill=page.locator("//div[@title='Advanced Computer Skills']");
        this.parentDropdown=page.locator("div#skillParent>span");
        this.saveButton=page.locator("button[aria-label='Save']");
    }
    async addSkill(skill:string) {
        await this.skillsMenu.click();
       await expect(this.addSkillButton).toBeVisible();
        await this.addSkillButton.click();
        await this.skillname.fill(skill);
        await this.parentDropdown.click();
        await this.parentSkill.click();
       // await this.saveButton.click();
        await this.page.pause();

    }
}