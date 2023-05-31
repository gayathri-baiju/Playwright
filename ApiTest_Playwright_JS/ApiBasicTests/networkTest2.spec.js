import { test, expect, request } from '@playwright/test';
import { ApiUtils } from '../utils/apiUtils';

const loginPayload = { userEmail: "anshika@gmail.com", userPassword: "Iamking@000" }
const orderpayload = { orders: [{ country: "India", productOrderedId: "6262e95ae26b7e1a10e89bf0" }] }
let response;
const fakePayloadOrder = { data: [], message: "No Orders" };

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderpayload);

});

test("ecommerce buy product", async ({ page }) => {

  // injecting token in local storage
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client/");
    //routing to url - first arg= which url to route, 2nd arg- how to route
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca", async route => {

        // intercepting response --  Api response->send to browser-> {playwright takes the response }->browser will render data on frontend

        const response = await page.request.fetch(route.request());   // real response  , request - api helper 
        let body = JSON.stringify(fakePayloadOrder);                          // storing fake response

        // reponse given to browser- if nothing given inside fulfill it takes the response got in route , 
        // if specificall y given, then it is overrided by given - here -> fake response
        route.fulfill({
            response,
            body
        })
    })
    
    await page.locator("button[routerlink*='/dashboard/myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca");
    await page.pause();
    //await page.locator("tbody").waitFor();
    //const rows = page.locator("tbody tr.ng-star-inserted ");


}) 