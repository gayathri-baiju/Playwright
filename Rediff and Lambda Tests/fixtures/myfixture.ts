import{test as myTest} from '@playwright/test'
type gayathri={
    age:number,
    email:string
}
const myfixtureTest=myTest.extend<gayathri>({
    age:27,
    email:"gayathri@gmail.com"
})
export const test=myfixtureTest;