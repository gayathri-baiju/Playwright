import {test,expect} from '@playwright/test';
import { AddSkill } from '../JobifyPages/AddSkill';

test("demo",async({browser})=>{
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