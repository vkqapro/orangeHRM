import {type Page, expect} from "@playwright/test"

export class Login{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async loginAsAdmin(user: string, password: string){
        const page = this.page
        await page.getByRole('textbox', {name: "Username"}).fill(user)
        await page.getByRole('textbox', {name: "Password"}).fill(password)
        await page.getByRole('button', {name: "Login"}).click()
        expect(await page.locator('ul li a span', {hasText: "Admin"}).textContent()).toEqual("Admin")
    }

    async loginAsEmployee(userEmployee: string, passwordEmployee: string, employeeName: string, employeeLastname: string){
        const page = this.page
        await page.getByRole('textbox', {name: "Username"}).fill(userEmployee)
        await page.getByRole('textbox', {name: "Password"}).fill(passwordEmployee)
        await page.getByRole('button', {name: "Login"}).click()
        expect(await page.locator('ul li span p', {hasText: `${employeeName} ${employeeLastname}`}).textContent()).toEqual("William Smith")
        
    }
}