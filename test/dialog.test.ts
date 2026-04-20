import {expect, test }from '@playwright/test'


test.beforeEach(async({page})=>
{
await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/")

})

test("handling alerts", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", dialog => {
        const text = dialog.message();
        console.log(text);
         dialog.accept("koushik");
    })
    await page.getByRole('button',{name:"Click Me"}).nth(2).click();
    // expect(page.locator("id=confirm-demo")).toContainText("Cancel!")
    expect(page.locator("id=prompt-demo")).toContainText("'koushik'");

})

test.afterEach(async({page})=>
{
console.log("done the program ")

})




