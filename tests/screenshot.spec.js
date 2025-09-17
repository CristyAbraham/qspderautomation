import {test, expect} from '@playwright/test'
test('popup',async({page})=>{

page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.waitForLoadState('networkidle')
await page.screenshot({path:'./screenshot/screenshot1.png', fullpage:true})
await page.locator('name').screenshot({path:'./screenshot/screenshot2.png'})

})