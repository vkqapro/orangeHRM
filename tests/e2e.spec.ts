import { test } from "@playwright/test";
import { PageManager } from "../src/pageManager";
import dotenv from 'dotenv'


dotenv.config()
let pm: PageManager
const user = process.env.USER_ADMIN
const password = process.env.PASSWORD_ADMIN
const employeeName = "William" // Minimum 5 characters
const employeeLastname = "Smith"
const EmployeeUserName = process.env.USER_EMPLOYEE
const EmployeeUserPassword = process.env.PASSWORD_EMPLOYEE

test.beforeEach(async({page})=>{
    pm = new PageManager(page)
    
})

test.describe('e2e', ()=> {
    test('Login as Admin', async()=>{
        await pm.navigateTo().loginPage()
        await pm.login().loginAsAdmin(`${user}`, `${password}`)
        await pm.navigateTo().pim()
        await pm.action().addEmployee(employeeName, employeeLastname, `${EmployeeUserName}`, `${EmployeeUserPassword}`)
    })

    test('Delete Employee', async()=>{
        await pm.navigateTo().loginPage()
        await pm.login().loginAsAdmin(`${user}`, `${password}`)
        await pm.navigateTo().pim()
        await pm.action().deleteEmployee(employeeName, employeeLastname)
    })

})