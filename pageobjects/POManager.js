const LoginPage = require('./LoginPage');
const {DashboardPage} = require('./DashboardPage');
const{cartPage} = require('./cartPage');
const{CheckoutPage} = require('./CheckoutPage');
const{orderpage} = require('./orderpage');
const{ordershistoorypage} = require('./ordershistoorypage');



class POManager
{
    constructor(page)
    {
        this.loginpage = new LoginPage(page);
        this.dashboard = new DashboardPage(page);
        this.carrtpage = new cartPage(page);
        this.checkoutpage = new CheckoutPage(page);
        this.orderPage = new orderpage(page);
        this.orderhistory = new ordershistoorypage(page);
    }

    getloginpage()
    {
        return this.loginpage;
    }

    getdashboard()
    {
        return this.dashboard;
    }

    getcarrtpage()
    {
        return this.carrtpage;
    }

    getcheckoutpage()
    {
        return this.checkoutpage;
    }
    getorderPage()
    {
        return this.orderPage;
    }

    getorderhistory()
    {
        return this.orderhistory;
    }




}
module.exports = {POManager};