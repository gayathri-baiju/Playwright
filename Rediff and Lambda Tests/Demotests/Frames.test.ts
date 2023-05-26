import{test,expect} from '@playwright/test'

test("Frame handling",async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allFrames=page.frames();
    console.log("Number of Frames: "+allFrames.length);

    const frame= page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Gayathri");
    await frame.locator("input[name='lname']").fill("Baiju");

    const innerFrame= frame.frameLocator("iframe[src='innerFrame']");             //locating inner frame by nesting(frame inside frame)
    await innerFrame.locator("input[name='email']").fill("gayathri@gmail.com");
    await page.waitForTimeout(5000);
})