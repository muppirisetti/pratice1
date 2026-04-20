import { Page } from "@playwright/test";

export class RegisterPage{
 readonly page:Page;

    constructor( page:Page){

    this.page=page
            }

   async resisterPage(Firstname: string,Lastname: string,email: string,telephone:string,password:string,cofirmpass:string){

     await this.page.getByText("First Name").fill(Firstname)
    await this.page.getByText("Last Name").fill(Lastname)
     await this.page.getByText("E-Mail").fill(email)
       await this.page.getByText("Telephone").fill(telephone)
        await this.page.locator('#input-password').fill(password)
        await this.page.locator('#input-confirm').fill(cofirmpass)
      await this.page.getByRole('radio', {name: "Yes"}).check({force:true})
      await this.page.getByRole('checkbox', {name: "I have read and agree to the "}).check({force:true}) 
       await this.page.locator('[class="btn btn-primary"]').click()
     
            
   }
}