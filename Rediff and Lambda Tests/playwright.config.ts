import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
    // projects: [
    //     {
    //         name: "chrome",
    //         use: {
    //             ...devices["Desktop Chrome"]
    //         }
    //     },
    //     {
    //         name: "firefox",
    //         use: {
    //             ...devices["Desktop Firefox"]
    //         }
    //     }
    // ],

   // testMatch: ["tests/saucelabDemo.test.ts"],
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "on",
    
        video: "on"
        
    },
    retries: 0,
    reporter:
        [
            ['dot'], ['json',
                {
                    outputFile: "jsonReports/jsonreport.json"
                }],
            ['html',
                {
                    open: 'on-failure'
                }]
        ]
});
