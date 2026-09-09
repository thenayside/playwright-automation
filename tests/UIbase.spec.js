const {test, expect} = require('@playwright/test');

test('first test case',async ({browser})=>
{

    const Context = await browser.newContext();
    const page = await Context.newPage();
    const username =  page.locator("#username");
    const password = page.locator("#password");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    await password.fill("");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();

    console.log(allTitles);

});

test('page automation test',async ({page})=>
{ 
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});

test("practice new page",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("nemalisachin222@gmail.com");
    await page.locator("#userPassword").fill("Qwert@123");
    await page.locator("#login").click();
    // await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());

});

test("practice dropdown",async({page})=>{
    const documentlink = await page.locator("a[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".checkmark").last().click();
    await expect(page.locator("#okayBtn")).toBeVisible();
    await page.locator("#okayBtn").click();  
    await expect(page.locator(".checkmark").last()).toBeChecked();
    await page.locator("#terms").click();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("class","blinkingText");

    // await page.pause();

});

test("practice child window",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const username =  page.locator("#username");
    const documentlink = await page.locator("a[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const [newpage] = await Promise.all([
     context.waitForEvent("page"),
     await documentlink.click()
]);
 const text = await newpage.locator(".red").textContent();
 const textarry = text.split("@");;
 const domine = textarry[1].split(" ")[0];
 console.log(domine);
 await username.fill(domine);
 console.log(await username.textContent());
});

test("end to end web automation",async ({page})=>{
    const products = page.locator(".card-body");
    const productName = "ZARA COAT 3";
    const email ="nemalisachin222@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("nemalisachin222@gmail.com");
    await page.locator("#userPassword").fill("Qwert@123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());
    const count = await products.count();
    for(let i=0; i < count;++i){
        if(await products.nth(i).locator("b").textContent() === productName)
         {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
         }
   } 
   await page.locator("[routerlink*='cart']").click();
//    await page.pause();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=checkout").click();
   await page.locator('[placeholder="Select Country"]').pressSequentially("ind");
   const dropdown = await page.locator('[class*="ta-result"]');
   await dropdown.waitFor();
   const countoption = await dropdown.locator("button").count();
   for(let i=0; i<countoption;++i){
    if(await dropdown.locator("button").nth(i).textContent() === " India"){
        await dropdown.locator("button").nth(i).click();
        break;  

    }

   }
await expect(page.locator('.user__name [type="text"]').first()).toHaveText(email);
await page.locator(".action__submit").click();
// const orderConfirmation = await page.locator(".hero-primary").waitFor();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const order_id = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
await console.log(order_id);
const orderbutton = await page.locator('button[routerLink*="myorder"]').click();
await page.locator("tbody tr").first().waitFor();
const rowCount = await page.locator('tbody tr');


for(let i=0; i< await rowCount.count();++i){
    const roworderid = await rowCount.nth(i).locator("th").textContent();
    if(order_id.includes(roworderid)){
        await rowCount.nth(i).locator("button").first().click();
        break;
    }
   

}

const orderiddetails = await page.locator(".col-text").textContent();
expect(order_id.includes(orderiddetails)).toBeTruthy();
await page.pause();

   



});