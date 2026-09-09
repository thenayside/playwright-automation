const { expect } = require('@playwright/test');

class orderpage 
{
    constructor(page)
    {
        this.heading = page.locator(".hero-primary");
        this.idorder = page.locator(".em-spacer-1 .ng-star-inserted");
        this.orders = page.locator('button[routerLink*="myorder"]')

    }

    async checkorderdetails()
    {
        await expect(this.heading).toHaveText(" Thankyou for the order. ");
        const orderId = (await this.idorder.textContent()).trim();
        console.log(orderId);
        return orderId;
    }

    async navigatetooreders()
    {
       await this.orders.click();
    }

}
module.exports = {orderpage};