import {test,expect} from "@playwright/test";


test("end to end web automation",async ({page})=>{
    const products = page.locator(".card-body");
    const productName = "ZARA COAT 3";
    const email ="nemalisachin222@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill("nemalisachin222@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Qwert@123");
    await page.getByRole("button", { name: "Login" }).click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body ").first().waitFor();
    await page.locator(".card-body ").filter({ hasText: "ZARA COAT 3" }).getByRole("button", { name: "Add To Cart" }).click();
    await page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
//    await page.pause();
   await page.locator("div li").first().waitFor(); 
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   await page.getByRole("button", { name: "Checkout"}).click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("button", { name: "India"}).nth(1).click();
  
   
await expect(page.locator('.user__name [type="text"]').first()).toHaveText(email);
await page.getByText("PLACE ORDER").click(); 
// const orderConfirmation = await page.locator(".hero-primary").waitFor();
await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();

});