import {test, expect} from "@playwright/test"


test('Healthcheck', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})