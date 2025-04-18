import {test as setup} from "../test-options"
import dotenv from 'dotenv';


dotenv.config()
const user = process.env.USER_ADMIN
const password = process.env.PASSWORD_ADMIN
const employeeName = "William" // Minimum 5 characters
const employeeLastname = "Smith"

setup("Delete employee's profile", async({pageManager}) => {
    await pageManager.navigateTo().loginPage()
    await pageManager.login().loginAsAdmin(`${user}`, `${password}`)
    await pageManager.navigateTo().pim()
    await pageManager.action().deleteEmployee(employeeName, employeeLastname)
})
