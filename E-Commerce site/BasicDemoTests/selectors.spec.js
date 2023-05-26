import {test,expect } from '@playwright/test';
test('selector demo', async({page}) =>{
await page.goto('https://www.saucedemo.com/');
await page.pause();
await page.click('id=user-name');      //using id object property
await page.locator('id=user-name').fill('Gayathri');

});