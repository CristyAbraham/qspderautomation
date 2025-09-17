import {test, expect} from '@playwright/test'
test('register',async({page})=>{
   await page.goto("https://demoapps.qspiders.com/ui?scenario=1 ");
   await page.waitForTimeout(2000);
   await page.viewportSize({length:'1920',height:'1080'})//set viewport sixe
   const size=page.viewportSize()//return the current viewport size
   console.log(size);
  console.log(await page.url());
    console.log(await page.title());
   await page.getByPlaceholder('Enter your name').fill('chrise')
   await page.waitForTimeout(2000)
   await page.getByPlaceholder('Enter Your Email').fill('cristy@sho30.com')
   await page.waitForTimeout(2000)
   await page.getByPlaceholder('Enter your password').fill('123gfff')
    await page.waitForTimeout(2000)
   await page.getByRole('button',{name:'Register'}).click();
})
test('clickin on button',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'yes'}).click()
    await page.waitForTimeout(2000)
   let text= await page.getByText('You selected "Yes"')
   await page.waitForTimeout(2000)
    await expect(text).toContainText('Yes')
    await page.waitForTimeout(2000)
})
test.only('dynamic table element',async({page})=>{
  await page.goto("https://demoapps.qspiders.com/ui/table/dynamicTable")
  await page.waitForTimeout(2000)
  let itemname= await page.locator('//tbody//tr//th').allTextContents()
  await page.waitForTimeout(2000)
  console.log(itemname);
  let price= await page.locator('//tbody//tr//td[4]').allInnerTexts()
  await page.waitForTimeout(2000)
  console.log(price)
  for (let i=0;i<=itemname.length;i++){
    console.log(`itemname is ${itemname[i]} and the price is ${price[i]}`);
  }
})
