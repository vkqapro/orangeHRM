import {type Page, expect} from "@playwright/test"

export class Action{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
    
    async addEmployee(employeeName: string, employeeLastname: string, userName:string, userPassword:string){
        const page = this.page
        await page.getByRole('button', {name: " Add "}).click()
        await page.getByRole('textbox', {name: "First Name"}).fill(employeeName)
        await page.getByRole('textbox', {name: "Last Name"}).fill(employeeLastname)
        await page.locator('div div label span').click()
        await page.locator('.oxd-grid-item', {hasText: "Username"}).locator('input').fill(userName)
        await page.locator('.oxd-grid-item', {hasText: "Password"}).locator('input').first().fill(userPassword)
        await page.locator('.oxd-grid-item', {hasText: "Confirm Password"}).locator('input').fill(userPassword)
        await page.getByRole('button', {name: "Save"}).click()
        await page.waitForTimeout(5000)
        const element = await page.locator('[class="orangehrm-edit-employee-name"]').innerText()
        expect(element).toEqual(`${employeeName} ${employeeLastname}`)
        console.log(element)

    }

    async deleteEmployee(employeeName: string, employeeLastname: string){
        const page = this.page
        await page.locator('ul li a', {hasText: "Employee List"}).click()
        const serchEmployee = page.locator('[class="oxd-input-group oxd-input-field-bottom-space"]').filter({hasText: "Employee Name"})
        await serchEmployee.getByPlaceholder('Type for hints...').fill(`${employeeName} ${employeeLastname}`)
        await page.getByRole('button', {name: "search"}).click()
        const deleteButton = page.getByRole('button').locator('.bi-trash')
        await page.waitForTimeout(1000)
        await deleteButton.click()
        await page.locator('.orangehrm-dialog-popup').getByRole('button', {name: "Yes, Delete"}).click()






    }




}

    