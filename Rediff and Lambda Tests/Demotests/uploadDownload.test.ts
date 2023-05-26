    import {test,expect} from '@playwright/test'
    test('Downloading files',async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox","Hello World");
    await page.click("id=create");
    
    const download=await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])
     //const path= await download[0].path();            //goes to temperary memory and gets deleted when browser is closed
     //console.log(path);
    const fileName= download[0].suggestedFilename();             
      await download[0].saveAs(fileName);            //storing and saving the file
    })
    //Upload File
    test('Uploading Files',async({page})=>{
     await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
     //await page.setInputFiles("input[type='file']",["apple.png"]);
      const [uploadFiles]= await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
      ])
      const isMultiple= uploadFiles.isMultiple();
      console.log(isMultiple);
      uploadFiles.setFiles(["apple.png"])


        })

    