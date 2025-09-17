import {test, expect} from '@playwright/test'
test('popup',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
  page.on('dialog',async(dialog)=>
  {
    console.log(dialog.type());
    expect (dialog.message()).toContain('Delete')

  })
  await page.locator('//tbody//tr[1]//td[1]/input').check()
  await page.getByRole('button', {name:'Delete', exact:true}).click()
})

test.only('prompt popup',async({page})=>{
page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(1000)
        await dialog.accept('Sometext')  
         await page.waitForTimeout(1000)  
})
await page.locator('//tbody//tr[1]//td/input').check();
await page.getByRole('button',{name:'Delete'}).click()
await page.waitForTimeout(2000)

})