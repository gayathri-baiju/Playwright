import{test,expect, Page} from '@playwright/test'

test("Single window handling",async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
console.log(page.url());
const [newWindow]=await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'")
]); 
console.log(newWindow.url());
//  newWindow.fill( "","");               //do actions using object newWindow
})

// MULTIPLE WINDOW HANDLING
test.only("Multiple Frame handling",async({page})=>{
   
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [multiPage]=await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]); 
    await multiPage.waitForLoadState();
    const pages= multiPage.context().pages(); 
    console.log("No of tabs: "+pages.length);
    pages.forEach(tab=>{
        console.log(tab.url());
    })
    // await pages[1].fill("","");        do action in the tab

    //loop to go to specific tab and do task there

    let facebookPage: Page; 
    for(let index=0; index < pages.length;index++){
        const url=pages[index].url();
        if (url=="https://www.facebook.com/lambdatest/")
        {
            facebookPage=pages[index];
        }
    }
    const text=await facebookPage.textContent("//h1");
    console.log(text);
               
    })