const{expect,test} = require('@playwright/test');

test('assignment',async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.getByPlaceholder("you@email.com").fill("nemalisachin222@gmail.com");
    await page.getByLabel("Password").fill("Qwert@123");
    await page.locator("#login-btn").click();
    await expect(page.locator("#user-email-display")).toHaveText("nemalisachin222@gmail.com");

    const[newpage] =await Promise.all([
    page.waitForURL("**/events"), // Replace with the actual URL pattern
    page.locator("#nav-events").click(),

]);

     
     await page.waitForLoadState("networkidle")
      await page.locator("[type='button']").click();
      await page.waitForLoadState("networkidle");
      await page.locator("#event-title-input").fill("diwali");
      await page.locator("#admin-event-form textarea").fill("diwali is a festival of lights");
      await page.getByLabel("City").fill("chittoor");
      await page.getByLabel("Venue").fill("chokkamudugu");
      await page.getByLabel("Event Date & Time").fill("2002-01-05T12:00");
      await page.getByLabel("Price ($)").fill("100");
      await page.getByLabel("Total Seats").fill('50');
      await page.locator("#add-event-btn").click();
    //await expect(page.locator("toastmessage")).toHaveText("event created").isVisible();
    await page.locator("#nav-events").click(),
    await page.locator()


});