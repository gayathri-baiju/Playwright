import{test,expect} from '@playwright/test';
test('Assertions Demo test',async({page})=>{
await page.goto('https://kitchen.applitools.com/');
await page.pause();

//ASSERTIONS
//check element present or not
await expect(page.locator('text=The Kitchen')).toHaveCount(1);   //unique element present with the title
if(await page.$('text=The Kitchen'))
{
    await page.locator('text=The Kitchen').click();
}

//check element visible or hidden
await expect(page.locator('text=The Kitchen')).toBeVisible();
await expect.soft(page.locator('text=The Kitchen')).toBeHidden();

//check element is enabled or disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled();
await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

//Check text
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen');
await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD');
await page.pause();

//check element attribute
     await expect(page.locator('text=The Kitchen')).toHaveAttribute('class','chakra-heading css-dpmy2a');
          //OR
     await expect(page.locator('text=The Kitchen')).toHaveClass('chakra-heading css-dpmy2a');
          // or using reg expression
     await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);   // .* - reg expression

// check page url and title
await page.pause();
await expect(page).toHaveURL('https://kitchen.applitools.com/');
await expect(page).toHaveTitle('The Kitchen');

 // visual validation with screenshot
await expect(page).toHaveScreenshot(); 

})