const {Before, After, BeforeStep, AfterStep} = require('@cucumber/cucumber');
const { chromium } = require("playwright");




Before(async function()
{
  
    const browser = await chromium.launch({
      headless: false,
    });
    const Context = await browser.newContext();
    this.page = await Context.newPage();
})

BeforeStep(function()
{

});


AfterStep(function()
{
    
})

After(function()
{
    console.log("this is my last code using after all steps");
})