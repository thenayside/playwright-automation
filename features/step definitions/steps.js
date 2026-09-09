const { Given, When, Then } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobjects/POManager");
const { chromium } = require("playwright");
const {expect} = require("@playwright/test");
Given(
  "login with the valid {string} and {string}",
  { timeout: 100 * 1000 },
  async function (username, password) {
    this.username = username;
    const products = this.page.locator(".card-body");
    this.pomanager = new POManager(this.page);
    const loginpage = this.pomanager.getloginpage();
    await loginpage.goto();
    await loginpage.validlogin(username, password);
  },
);

When("Add {string} to the cart", async function (productName) {
  this.productName = productName;
  const dashboard = this.pomanager.getdashboard();
  await dashboard.searchproductaddcart(productName);
  await dashboard.navigatetocartpage();
});
Then("verify the product is displayed in the cart", async function () {
  const carrtpage = this.pomanager.getcarrtpage();
  await carrtpage.checkproduct();
  await carrtpage.navigatetocheckoutpage();
});
When(
  "enter the valid details and place order",
  { timeout: 30 * 1000 },
  async function () {
    const checkoutpage = this.pomanager.getcheckoutpage();
    await checkoutpage.checkoutpagefilling(this.username);
    await checkoutpage.placeorder();
  },
);
Then(
  "verify whether the order is place in the order history",
  async function () {
    const orderPage = this.pomanager.getorderPage();
    const orderId = await orderPage.checkorderdetails();
    await orderPage.navigatetooreders();
    const orderhistory = this.pomanager.getorderhistory();
    await orderhistory.orderdetailscheck(orderId);
  },
);

Given(
  "login to commerce application with the valid {string} and {string}",
  {timeout:100*1000},async function (usernameq, passwordw) {
    const username = this.page.locator("#username");
    const password = this.page.locator("#password");
    const signIn = this.page.locator("#signInBtn");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());
    await username.fill(usernameq);
    await password.fill(passwordw);
    await signIn.click();
  },
);

Then("verify error message is displayed",async function () {
console.log(await this.page.locator("[style*='block']").textContent());
 await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});


