import { type Page } from "@playwright/test";
import { NavigateTo } from "./page-objects/navigateTo";
import { Login } from "./helpers/login";
import { Action } from "./page-objects/action";


export class PageManager{
    private page: Page

    constructor(page:Page){
        this.page = page
    }

    navigateTo(){
        return new NavigateTo(this.page)
    }

    login(){
        return new Login(this.page)
    }

    action(){
        return new Action(this.page)
    }
}