class DashboardPage {
    constructor(page) {
        this.page=page;
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
    }

    async searchProductAddToCart(productName) {
        await this.page.waitForTimeout(3000);
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        console.log(count);


        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {   //search restricted to scope of location of this product 
                //add to cart
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
        
    }
    async navigateToCart(){
        await this.cart.click();
    }
}
module.exports={DashboardPage}