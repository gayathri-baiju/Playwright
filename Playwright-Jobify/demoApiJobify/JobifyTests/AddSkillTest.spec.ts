import {test,expect} from '@playwright/test';
import { AddSkill } from '../JobifyPages/AddSkill';

test("Add skill field validations ",async({browser})=>{
    const context=await browser.newContext({
       storageState:"./auth.json"
   })
   const page=await context.newPage();
   await page.goto("https://ess-training.experionglobal.dev:2000/employee/view");
   await page.waitForTimeout(5000);
   const addSkill= new AddSkill(page);
   await addSkill.addSkillFieldValidations();
})
test("Mandatory check of Add skill",async({browser})=>{
    const context=await browser.newContext({
        storageState:"./auth.json"
    })
    const page=await context.newPage();
    await page.goto("https://ess-training.experionglobal.dev:2000/employee/view");
    await page.waitForTimeout(5000);
    const addSkill= new AddSkill(page);
    await addSkill.mandatoryCheckAddSkill();

})
test.only("Add skill name with more than 25 characters",async({browser})=>{
    const context=await browser.newContext({
        storageState:"./auth.json"
    })
    const skill="ProblemsolvingProblem@1234"
    const page=await context.newPage();
    await page.goto("https://ess-training.experionglobal.dev:2000/employee/view");
    await page.waitForTimeout(5000);
    const addSkill= new AddSkill(page);
    await addSkill.skillNameBoundaryCheck(skill);

})

test("Add skill successfully ",async({browser})=>{
     const context=await browser.newContext({
        storageState:"./auth.json"
    })
 
    let skill="Coding";
    const page=await context.newPage();
    await page.goto("https://ess-training.experionglobal.dev:2000/employee/view");
    await page.waitForTimeout(5000);
    const addSkill= new AddSkill(page);
    await addSkill.addSkill(skill);
})
