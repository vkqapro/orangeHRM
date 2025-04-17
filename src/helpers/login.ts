import {type Page, expect} from "@playwright/test"

export class Login{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async loginAsAdmin(user: string, passwrod: string){
        const page = this.page
        await page.getByRole('textbox', {name: "Username"}).fill(user)
        await page.getByRole('textbox', {name: "Password"}).fill(passwrod)
        await page.getByRole('button', {name: "Login"}).click()
        // expect(await page.locator('ul li a span', {hasText: "Admin"}).textContent()).toEqual("Admin")
    }
}