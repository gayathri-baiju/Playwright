import{test}from '@playwright/test'

//Skipping a test
test.skip('Test one',async({page})=>{

});
// test to be failed 
test('test two',async({page})=>{
    // page.goto('https://www.google.com/');
    test.fail();
});
//test to be fixed
test.fixme('Test 3',async({page})=>{

});
// to slowdown a  test
test('Test 4',async({page})=>{
    test.slow();
});
//TAGS
test('Test login @smoke',async({page})=>{

})
