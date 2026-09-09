const { expect } = require('@playwright/test');

class CheckoutPage
{
    constructor(page)
    {
        this.country =page.locator('[placeholder="Select Country"]');
        this.dropdown = page.locator('[class*="ta-result"]');
        // this.dropdownoptions =dropdown.locator("button");
        this.emailfield =page.locator('.user__name [type="text"]');
        this.submitbutton =page.locator(".action__submit");


    }

   async checkoutpagefilling(email)
    {
        
           await this.country.pressSequentially("ind");
           const dropdown = await  this.dropdown;
           await dropdown.waitFor();
           const countoption = await dropdown.locator("button").count();
           for(let i=0; i<countoption;++i){
            if(await dropdown.locator("button").nth(i).textContent() === " India"){
                await dropdown.locator("button").nth(i).click();
                break;  
        
            }
        
           }
        await expect(this.emailfield.first() ).toHaveText(email);
        

    }

    async placeorder()
    {
        await this.submitbutton.click();
    }
}
module.exports = {CheckoutPage};