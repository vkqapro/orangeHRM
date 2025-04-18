import {test as setup } from '../test-options'
import dotenv from 'dotenv'

dotenv.config()
const user = process.env.USER_ADMIN
const password = process.env.PASSWORD_ADMIN
const employeeName = "William" // Minimum 5 characters
const employeeLastname = "Smith"
const EmployeeUserName = process.env.USER_EMPLOYEE
const EmployeeUserPassword = process.env.PASSWORD_EMPLOYEE


setup('Create a new Employee', async({pageManager}) => {
    await pageManager.navigateTo().loginPage()
    await pageManager.login().loginAsAdmin(`${user}`, `${password}`)
    await pageManager.navigateTo().pim()
    await pageManager.action().addEmployee(employeeName, employeeLastname, `${EmployeeUserName}`, `${EmployeeUserPassword}`)
})