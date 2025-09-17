export class loginpage
{
    /** 
    *@param {import('playwright').Page} page
    */
   constructor(page){
    this.page=page;
   this.fname= page.getByPlaceholder('First name')
   this.lname=page.getByPlaceholder('Last name')
   this.emailtf=page.getByPlaceholder('Email address')
   this.cname=page.getByPlaceholder('Company name')
   this.country=page.getByPlaceholder('Country/Region').click
   this.country.selectOption({label:'India'}).click

   }
   async signup(){

   }
}