import { test } from "../test-options"
import { PageManager } from "../src/pageManager";
import dotenv from 'dotenv'


dotenv.config()
const user = process.env.USER_ADMIN
const password = process.env.PASSWORD_ADMIN
const employeeName = "William" // Minimum 5 characters
const employeeLastname = "Smith"
const EmployeeUserName = process.env.USER_EMPLOYEE
const EmployeeUserPassword = process.env.PASSWORD_EMPLOYEE

test.describe('E2E UI Tests', ()=> {
    
    test('Login as Eemployee', async({pageManager})=>{
        await pageManager.navigateTo().loginPage()
        await pageManager.login().loginAsEmployee(`${EmployeeUserName}`, `${EmployeeUserPassword}`, employeeName, employeeLastname)
    })

})