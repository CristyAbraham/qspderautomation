import { test, expect } from "@playwright/test";
test.only('handling framess',async({page})=>{
    page.goto('https://demoapps.qspiders.com/ui/frames')
    const frame= page.frameLocator('//iframe[@class="w-full h-96"]')
    await page.waitForTimeout(2000);
    await frame.locator('#username').fill('cristy')
    await frame.locator('#password').fill('1234')
    await frame.getByRole('button',{name:'Login'}).click();

})
test('nested frame',async({page})=>{
    page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
    const parentframe= page.frameLocator('[class="w-full h-96"]')
   const childframe= parentframe.frameLocator('iframe')
   await childframe.locator('#email').fill("chrisel76@gmail.com")
   await childframe.locator('#password').fill("123")
   await childframe.locator('#confirm-password').fill("123")
   await childframe.getByRole('button',{name:'Sign Up'}).click()
await page.waitForTimeout(2000);


})
