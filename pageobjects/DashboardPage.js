class DashboardPage 
{
    constructor(page)
    {
        this.products = page.locator(".card-body");
        this.productText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");


    }

    async searchproductaddcart(productName)
    {
         await this.productText .first().waitFor();
    console.log(await  this.productText .allTextContents());
    const count = await this.products.count();
    for(let i=0; i < count;++i){
        if(await this.products.nth(i).locator("b").textContent() === productName)
         {
            await this.products.nth(i).locator("text= Add To Cart").click();
            break;
         }
   } 
    }


    async navigatetocartpage()
    {
        await this.cart.click();
    }

}
module.exports={DashboardPage}