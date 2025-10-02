import { Page, ElementHandle, Locator } from '@playwright/test';

export class commonMethods {
    constructor(private page: Page) {
        this.page = page;
    }

    async waitForNetworkLoadState() {
        try {

            //Attempt to wait for network to be idle for upto 10 seconds
            await this.page.waitForLoadState('networkidle', { timeout: 10000 });
        }
        catch (error: unknown) {
            console.error('Unexpected error', error)

            //Throw error

        }
    }

    async waitForElement(selector: any) {

        try {
            await this.page.waitForSelector(selector, { state: 'visible' });
        }
        catch (error) {
            console.error('Error interacting with the page', error)
        }
    }

    async clickOnElement(selector: any) {
        try {
            await this.waitForElement(selector);
            await this
        }
        catch (error) {
            console.error('Error interacting with the page', error)
        }
    }
    async getText(selector: any) {
        await this.waitForElement(selector);
        return await this.page.locator(selector).innerText();
    }  
}