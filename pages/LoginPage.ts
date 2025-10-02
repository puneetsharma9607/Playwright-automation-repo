import { Locator, Page } from '@playwright/test';
import { assert, expect, util } from 'chai';

export class LoginPage {
    private data: any;
    private testdata: any;
    private element!: Locator;

    public readonly locators = {

        //Login page locators
        title_loginPage: "//div[@class='login_logo']",
        input_userName: "[id='user-name']",
        input_password: "[id='password']",
        btn_login: "[id='login-button']",


    }

    constructor(private page: Page) {

    }

    async goTo() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(username: string, password: string) {
        await this.page.fill(this.locators.input_userName, username);
        await this.page.fill(this.locators.input_password, password);
        await this.page.click(this.locators.btn_login);
    }
}