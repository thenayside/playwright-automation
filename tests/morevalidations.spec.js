// const {test,expect} =require('@playwright/test');

// test.only("popup validation",async({page})=>{
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//     // await page.goto("https://google.com");
//     // await page.goBack();
//     // await page.goForward();
//     await expect(page.locator("#displayed-text")).toBeVisible();
//     await page.locator("#hide-textbox").click();
//     await expect(page.locator("#displayed-text")).toBeHidden();
//     // await page.pause();
//     await page.on('dialog',dialog => dialog.accept());
//     await page.locator("#confirmbtn").click();
//     await page.locator('#mousehover').hover();
//     const ap = await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'NEW All Access plan' });

//     await ap.click();
//     const text = await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('heading', { name: 'Join 13,522 Happy Subscibers!' }).textContent();
//     console.log(text.split(" ")[1]);



   







// });

const {test,expect} =require('@playwright/test');

test("popup validation",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    // await page.goto("https://google.com");
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    // await page.pause();
    await page.on('dialog',dialog => dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator('#mousehover').hover();
    const frame = await page.frameLocator("#courses-iframe");
    await frame.getByRole("link",{name:'All Access Plan'}).click();
    const text =  await frame.getByText("Join 13,522 Happy Subscibers!").textContent();
    console.log(text.split(" ")[1]);

});

test('screenshot & visual presentation',async({page})=>{
   
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator('#displayed-text').screenshot({path:"elementscreenshot.png"});
  
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await page.screenshot({path:"page screenshot.png"})
    await expect(page.locator("#displayed-text")).toBeHidden();

});


test.skip("visual testing with screenshot",async({page})=>
{
    await page.goto("https://www.google.com");
    expect(await page.screenshot()).toMatchSnapshot("googlepage.png");

});