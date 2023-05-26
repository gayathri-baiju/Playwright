import { test, expect } from "@playwright/test"

test("Demoqa demo Register", async ({ page }) => {
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.fill("#firstName", "Gayathri");
    await page.fill("#lastName", "Baiju");
    await page.fill("#userEmail", "gayathri@gmail.com");
    const isfemalechecked = page.locator("label[for='gender-radio-2']");
    await isfemalechecked.check();
    expect(isfemalechecked).toBeChecked();
    await page.fill("//input[@id='userNumber']", "8907643234");

    await page.click("//input[@id='dateOfBirthInput']");
    await page.locator("//select[contains(@class,'month-select')]").selectOption("2");
    await page.locator("//select[contains(@class,'year-select')]").selectOption("2023")
    await page.click("(//div[contains(@class,'react-datepicker__day react-datepicker__day--008')])[1]");
    //await page.fill("#dateOfBirthInput","06 May 2023");

    await page.check("label[for='hobbies-checkbox-2']");

    const [chooseFile] = await Promise.all([
        page.waitForEvent("filechooser"),
        await page.click("#uploadPicture")
    ])
    chooseFile.setFiles("Lambdainfo.txt");
})

test("new tab handle demo", async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const tabButton = page.locator("#tabButton");
    console.log(await page.title());

    const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        await tabButton.click()
    ])
    await newPage.waitForTimeout(3000);
    console.log(newPage.url());
})
test("new window handle", async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows");
    const windowButton = page.locator("#windowButton");
    console.log(await page.title());

    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        await windowButton.click()
    ])
    await newWindow.waitForTimeout(3000);
    console.log(newWindow.url());
})

// test("window message demo",async({page})=>{
//     await page.goto("https://demoqa.com/browser-windows");
//     const windowMessageButton=page.locator("#messageWindowButton");

//     const [newWindow]=await Promise.all([
//         page.waitForEvent("popup") ,
//         await windowMessageButton.click()     
//     ])


// })
test("Alert demo", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    const alertButton = page.locator("#alertButton");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("You clicked a button");
        await dialog.accept();
    })
    await alertButton.click();
})
test("Alert demo with ok and cancel", async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
    const alertButn = page.locator("#confirmButton");

    page.on("dialog", async (alert) => {

        expect(alert.message()).toContain("Do you confirm action?");
        await alert.dismiss();
    })
    await alertButn.click();
    expect(page.locator("#confirmResult")).toHaveText("You selected Cancel");

})
test("Mouse hover demo test", async ({ page }) => {
    // await page.goto("https://demoqa.com/tool-tips");
    // const mouseHoverButton= page.locator("#toolTipButton");
    // await mouseHoverButton.hover();
    await page.goto("https://demoqa.com/menu#");
   const mainItemButton= page.locator("//a[contains(text(),'Main Item 2')]");
   await mainItemButton.hover();
   await page.waitForTimeout(2000);
   const subItemButton=page.locator("//a[contains(text(),'SUB SUB LIST »')]");
   await subItemButton.hover();
   await page.waitForTimeout(2000);
   await page.click("//a[contains(text(),'Sub Sub Item 2')]");
})
test.only("Multiselect dropdown demo", async ({ page }) => {
   await page.goto("https://demoqa.com/select-menu");
   const multiDropButton=page.locator("//div[text()='Select...']");
   await multiDropButton.click();
   await multiDropButton.selectOption([
    {
        label: "Green"
    }, {
        index: 2
    }
   ])
})

