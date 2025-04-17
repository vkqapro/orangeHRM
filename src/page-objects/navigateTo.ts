import {type Page, expect} from "@playwright/test"

export class NavigateTo{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    
    async loginPage(){
        const page = this.page
        await page.goto('/')
        expect(page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async pim(){
        const page = this.page
        const buttonPIM = page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]')
        await buttonPIM.filter({hasText: "PIM"}).click()
        await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        expect(this.page.url()).toBe('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    }
}