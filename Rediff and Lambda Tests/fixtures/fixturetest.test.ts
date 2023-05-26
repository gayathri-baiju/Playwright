import {test} from "./myfixture";

test("fixture Demo",async({age,email})=>{
console.log(age+23,email.toUpperCase());
})