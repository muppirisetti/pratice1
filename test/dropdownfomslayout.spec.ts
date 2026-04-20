import { expect, test } from "@playwright/test";
  
test.beforeEach(async ({page})=>

     await page.goto(" http://localhost:4200/")

  )


test("handling dropdown", async ({ page }) => {


   const dropdownlist = page.locator('ngx-header nb-select')
    await dropdownlist.click()

    const options = page.getByRole('list').locator('nb-option')
    await expect(options).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])

    await options.filter({ hasText: "Dark" }).click()
    const headere = page.locator('nb-layout-header')
    expect(headere).toHaveCSS('background-color', 'rgb(34, 43, 69)')
   
    const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)"

    }
   await dropdownlist.click()
    for (const color in colors) {
        await options.filter({ hasText: color }).click()
        expect(headere).toHaveCSS('background-color', colors[color])
        await dropdownlist.click()
    }

     //await opt eion('Dark');

    /* async function option(color:string) {
        const options =page.getByRole('list').locator('nb-option')
         await expect(options).toHaveText(["Light","Dark","Cosmic","Corporate"])
         await options.filter({hasText:color}).click()
        
     }*/


})

test.afterEach(async({page})=>
{
console.log("done the program ")

})