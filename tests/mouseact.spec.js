import {test,expect} from "@playwright/test"
test ('checkbox',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")
    await page.waitForTimeout(2000)
    //await page.locator()check();

})