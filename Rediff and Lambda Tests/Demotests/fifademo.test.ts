import { test, expect } from '@playwright/test';

test("Open Home page and verify title", async ({ page }) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    await page.waitForTimeout(2000);
    expect(page).toHaveTitle("FIFA+");
})
test("Verify logo is visible and title", async ({ page }) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    const logo = page.locator("img[title='FIFA Plus Logo']")
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('title', 'FIFA Plus Logo');

})
test.only("Verify text of links", async ({ page }) => {
    await page.goto("https://www.fifa.com/fifaplus/en/home");
    const expectedLinkTexts = ["FIFA U-20 WORLD CUP 2023™",
        "FIFA WOMEN'S WORLD CUP 2023™",
        "FIFA BEACH SOCCER WORLD CUP 2023™",
        "OTHER FIFA TOURNAMENTS",
        "FIFA WORLD CUP 2026™",
        "ORIGINALS",
        "ARCHIVE",
        "MATCH CENTRE",
        "LIVE STREAMING",
        "HIGHLIGHTS",
        "PLAY ZONE",
        "FIVES",
        "GLOBAL GOALSCORER",
        "WHO AM I?",
        "HEAD TO HEAD",
        "TRIVIA",
        "FIFA STORE",
        "BUY TICKETS",
        "FIFA+ COLLECT",
        "NEWS"
    ]
    const navLinks = page.locator("#mainLinksID a");
   
    await page.waitForTimeout(2000);
    console.log(await navLinks.allInnerTexts());
    
    //instead of adding timeout - waiting till first link is visible or loaded in the screen
   // await expect(navLinks.first()).toBeVisible();
    expect(await navLinks.allInnerTexts()).toEqual(expectedLinkTexts);
})