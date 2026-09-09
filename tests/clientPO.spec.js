const {test} = require('@playwright/test');
const{POManager} = require('../pageobjects/POManager');
const testdata = JSON.parse(JSON.stringify(require('../Utils/clientPOTestData.json')));
for(const data of testdata){
test(`client app login for ${data.productName}`,async ({page})=>{
    const products = page.locator(".card-body");
    // const productName = "ZARA COAT 3";
    // const email ="nemalisachin222@gmail.com";
    // const password ="Qwert@123";
    const pomanager = new POManager(page);
    const loginpage = pomanager.getloginpage();
    await loginpage.goto();
    await loginpage.validlogin(data.email,data.password);
    const dashboard = pomanager.getdashboard();
    await dashboard.searchproductaddcart(data.productName);
    await dashboard.navigatetocartpage();
    const carrtpage = pomanager.getcarrtpage();
    await carrtpage.checkproduct();
    await carrtpage.navigatetocheckoutpage();
    const checkoutpage = pomanager.getcheckoutpage();
    await checkoutpage.checkoutpagefilling(data.email);
    await checkoutpage.placeorder();
    const orderPage = pomanager.getorderPage();
    const orderId = await orderPage.checkorderdetails();
    await orderPage.navigatetooreders();
    const orderhistory = pomanager.getorderhistory();
    await orderhistory.orderdetailscheck(orderId);
    
});
}

