import {test,expect} from '@playwright/test'
import excel from 'exceljs'
test('testdata from excel',async({page})=>
{
const book=new excel.Workbook()
await book.xlsx.readFile('./Testdata/Testdata/Book1.xlsx')
const sheet=book.getWorksheet('Sheet1')
    const val1=sheet.getRow(4).getCell(1).value
    console.log(val1)
})
test.only('write data to excel',async({page})=>
{
    const book=new excel.Workbook()
    await book.xlsx.readFile('./Testdagta/Testdata/Book1.xlsx')//same work sheet
    const sheet=book.addWorksheet('Abc')
    //const sheet=book.getWorksheet('Sheet1')
    sheet.getRow(1).getCell(1).value='new text';
    await book.xlsx.writeFile('./Testdata/Testdata/Book1.xlsx')
})