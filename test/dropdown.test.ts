import { test } from "@playwright/test";


test("handling dropdown", async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    
    await page.selectOption("#select-demo", {
        // label: "Tuesday"
        // value: "Friday"
        index: 1
    })
    await page.waitForTimeout(3000);

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
        await page.waitForTimeout(3000);
})

test.only("Bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");
    // await page.waitForTimeout(3000)

    async function selectCountry(countryName) {
       
       await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
})

test.only("dynamic dropdown", async ({ page }) => {
    await page.goto("https://www.yatra.com/");
     await page.getByAltText('cross').first().click();

   await page.locator('p').filter({hasText:"Departure From"}).click()
   const departu= page.locator('#input-with-icon-adornment')
   await departu.pressSequentially('NEW')

   await page.getByText('Departure From').click();
  await page.getByRole('textbox', { name: 'Departure From' }).fill('new');
  await page.getByText('New York All airports NYC').click();
  
})

  
