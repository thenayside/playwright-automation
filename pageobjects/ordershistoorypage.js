const { expect } = require('@playwright/test');

class ordershistoorypage
{
    constructor(page)
    {
        this.tablerow = page.locator("tbody tr");
        this.oredrdetails =page.locator(".col-text");

    }

    async orderdetailscheck(orderId)
    {
        await this.tablerow .first().waitFor();
        const rowCount = await this.tablerow ;


     for(let i=0; i< await rowCount.count();++i)
        {
          const roworderid = await rowCount.nth(i).locator("th").textContent();
          if(orderId.includes(roworderid))
            {
              await rowCount.nth(i).locator("button").first().click();
              break;
            }
   

        }

     const orderiddetails = await this.oredrdetails.textContent();
      expect(orderId.includes(orderiddetails)).toBeTruthy();
    }
}
module.exports = {ordershistoorypage};