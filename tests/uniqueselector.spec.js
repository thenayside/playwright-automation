import {test,expect} from "@playwright/test";

test("unique selector",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("Qwart@123");
    await page.getByRole("button",{name:"Submit"}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:8000});
    await page.getByRole("link",{name : "Shop"}).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
});








// test("test level timeout",async({page})=>{
//     test.setTimeout(60000);
//     const slowtimeout  = expect.configure({timeout:10000});
//     await page.goto("https://rahulshettyacademy.com/angularpractice/");
//     await page.getByLabel("Check me out if you Love IceCreams!").check();
//     await page.getByLabel("Employed").check();
//     await page.getByLabel("Gender").selectOption("Male");
//     await page.getByPlaceholder("Password").fill("Qwart@123");
//     await page.getByRole("button",{name:"Submit"}).click();
//     await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
//     await slowtimeout(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:8000});
//     await page.getByRole("link",{name : "Shop"}).click();
//     await slowtimeout(page.locator(".my-4").first()).toHaveText("Shop Name");
//     await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
    
// });