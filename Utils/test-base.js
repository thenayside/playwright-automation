const base = require('@playwright/test')
exports.customlogindata = base.test.extend(
    {
        testdatafixture :
        {
          productName: "ZARA COAT 3",
          email:"nemalisachin222@gmail.com",
          password:"Qwert@123"  
        }
    }
);