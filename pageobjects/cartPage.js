const { expect } = require('@playwright/test');

class cartPage 
{
    constructor(page,)
    {
        this.productlist =page.locator("div li");
        this.desiredproductname = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutbutton = page.locator("text=checkout");

    }

    async checkproduct()
    {
         await this.productlist.first().waitFor();
           const bool = await this.desiredproductname.isVisible();
           expect(bool).toBeTruthy();
           
    }

    async navigatetocheckoutpage()
{
        await this.checkoutbutton.click();
}
}

module.exports = {cartPage};