import {test,expect} from '@playwright/test'
test('Demologin Test',async({page})=> {
await page.goto('https://demo.applitools.com/');
await page.pause();
await page.locator('[placeholder="Enter your username"]').fill('gayathri');
await page.locator('[placeholder="Enter your password"]').fill('Hellogayathri');
await page.locator('text=Sign in').click();
}) 
test('Demologin Test 2',async({page})=> {                    // only used to indicate running that specific test 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   // await page.pause();

  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('MATHEW ABRAHAM').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

})
test.only('Demologin Test 3',async({page})=>{
await page.pause();
await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').press('Control+a');
  await page.getByLabel('Email:').fill('admin@yourstore.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').press('Control+a');
  await page.getByLabel('Password:').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.close();

})