import {test,expect} from '@playwright/test'
import {registerpage} from '../pageobject/register.js'
import testdata from "../TestData/Testdata/registerdat.json"
testdata.forEach(({username,password},index)=>{
test(`Register #${index+1}`,async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/shadow?sublist=0")
    const rpage=new registerpage(page)
    await rpage.registeration(username,password);
    await page.waitForTimeout(2000);
})
})