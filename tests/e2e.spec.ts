import { test } from "../test-options"
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

test.describe('E2E UI Tests', ()=> {
    test('Login as Admin and create a new employee', async({pageManager})=>{
        await pageManager.navigateTo().loginPage()
        await pageManager.login().loginAsAdmin(`${user}`, `${password}`)
        await pageManager.navigateTo().pim()
        await pageManager.action().addEmployee(employeeName, employeeLastname, `${EmployeeUserName}`, `${EmployeeUserPassword}`)
    })

    test('Delete an Employee', async({pageManager})=>{
        await pageManager.navigateTo().loginPage()
        await pageManager.login().loginAsAdmin(`${user}`, `${password}`)
        await pageManager.navigateTo().pim()
        await pageManager.action().deleteEmployee(employeeName, employeeLastname)
    })

})