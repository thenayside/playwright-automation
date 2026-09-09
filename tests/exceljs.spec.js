const Exceljs = require('exceljs');
const {test,expect} = require('@playwright/test');


async function writeFilexceltest(searchtext,replacetext,change,path){
    

const workbook = new Exceljs.Workbook();
await workbook.xlsx.readFile(path);
const worksheet = workbook.getWorksheet("Sheet1");
const outsput = await readExcel(worksheet,searchtext)

const cell = worksheet.getCell(outsput.row,outsput.col+change.colchange);
cell.value=replacetext;
await workbook.xlsx.writeFile(path);
// console.log("successfull");

}

async function readExcel(worksheet,searchtext) {
  let output = {row:-1,col:-1}
  
  worksheet.eachRow((row,rowNumber)=>
{
    row.eachCell((cell,colNumber)=>
    {
      if(cell.value === searchtext)
      {
        output.row = rowNumber;
        output.col = colNumber;
      }

    });

});
return output;
  
}
// writeFilexceltest("Mango","500",{rowchange:0,colchange:2},"C:/Users/91996/Desktop/download.xlsx");

test("using download and upload the excelsheet",async({page})=>
{
  const updaevalue ="500"
  await page.goto("https://rahulshettyacademy.com/upload-download-test/");
  const downloadpromise = page.waitForEvent('download');
  await page.locator("#downloadButton").click();
  await downloadpromise;
  writeFilexceltest("Mango",updaevalue,{rowchange:0,colchange:2},"C:/Users/91996/Desktop/download.xlsx");
  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles("C:/Users/91996/Desktop/download.xlsx");
  const desiredrow = await page.getByRole("row").filter({hasText:"Mango"});
  await expect(desiredrow.locator("#cell-4-undefined")).toContainText(updaevalue);

});