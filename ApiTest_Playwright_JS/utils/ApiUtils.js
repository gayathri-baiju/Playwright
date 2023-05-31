class ApiUtils {

    constructor(apiContext,loginPayload) {

        this.apiContext = apiContext;
        this.loginPayload=loginPayload;
    }
    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayload
            })
        //expect(loginResponse.ok()).toBeTruthy();                    //200,201 etc
        const loginResponseJason = await loginResponse.json();    // coverting to json format
        const token = loginResponseJason.token;                        // extracting only the token from json
        console.log(token);
        return token;
    }

    async createOrder(orderpayload) {
        let response ={};
        response.token=await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderpayload,
                headers: {
                    'Authorization': response.token,
                    'Content-Type': 'application/json'
                },
            });
        const orderResponseJson = await orderResponse.json();
        const orderId = orderResponseJson.orders[0];
        response.orderId=orderId;

        return response;
    }
}
module.exports={ApiUtils};