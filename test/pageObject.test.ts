import {expect, test }from '@playwright/test'
import {RegisterPage} from '../pages/RegisterPage.ts'


test.beforeEach(async({page})=>
{
await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")

})

test("registeration page", async ({page})=>{
 
  /*await page.getByText("First Name").fill('gopi')
       await page.getByText("Last Name").fill('Krishna')
        await page.getByText("E-Mail").fill('gqis22qq@gmail.com')
         await page.getByText("Telephone").fill('1234567890')
          await page.locator('#input-password').fill('Welcome@2')
           await page.locator('#input-confirm').fill('Welcome@2')
        await page.getByRole('radio', {name: "Yes"}).check({force:true})
       await  expect(page.getByRole('radio', {name: "Yes"})).toBeChecked()
        await page.getByRole('checkbox', {name: "I have read and agree to the "}).check({force:true})
         await page.locator('[class="btn btn-primary"]').click()
       expect(page.locator('#common-success').filter({hasText:" Your Account Has Been Created!"})).toBeTruthy()
      */
     const resgist= new RegisterPage(page);
     await resgist.resisterPage('gopi','muppi','gopaaai@gmail.com','233333333','Welcome@1382','Welcome@1382')


     
       
})