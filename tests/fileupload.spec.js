import {test,expect} from '@playwright/test'
import path from 'path'
test('singlefile',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    console.log(__dirname);
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded();
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../fixtures/Users/oshopaul/Downloads'))
    await page.waitForTimeout(2000)
})
