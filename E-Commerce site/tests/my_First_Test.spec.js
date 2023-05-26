const {test,expect}=require('@playwright/test')          //adding separate files-test,modules,scripts under plawright package
                                                              // only need test and script
 /*const{ap,or}  =require('./demo/hello')            // importing functions from other file 
 import {ap,or} from './demo/hello'                // or use import keyword 
 console.log(ap()) ;
 console.log(or());  */
 test('My First test',async ({page})=>{
await page.goto('https://www.google.com')
await expect(page).toHaveTitle('Google')

 })