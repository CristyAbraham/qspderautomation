import { expect } from '@playwright/test';


export class registerpage
{
    /** 
    *@param {import('playwright').Page} page
    */
    constructor(page)
    {
        this.page=page;
       this.nametf= page.getByPlaceholder('Enter your username');
       this.passwoedtf=page.getByPlaceholder('Enter your password');
       this.btn=page.getByRole('button',{name:'Login'})
        
    }
    async registeration(username,password){
        console.log(await this.nametf.isEditable())
        await this.nametf.fill(username)
        await this.passwoedtf.fill(password)
        await this.btn.click();

    }
}