import {test} from '@playwright/test';
import { Login } from '../JobifyPages/loginPage';

test("Test",async({page})=>{
    let email="gayathri.baiju@experionglobal.com";
    let password= "Experion@2023";
    const login= new Login(page);
    await login.signIn(email,password);
    
   
})