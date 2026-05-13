import { Page } from '@playwright/test';

export class CheckoutPage1 {
  constructor(private page: Page) {}

  private locators = {
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    postalCodeInput: '#postal-code',
    continueButton: '[data-test="continue"]',
  };

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill(this.locators.firstNameInput, firstName);
    await this.page.fill(this.locators.lastNameInput, lastName);
    await this.page.fill(this.locators.postalCodeInput, postalCode);
  }

  async clickContinue() {
    await this.page.click(this.locators.continueButton);
  }

  async getPageUrl() {
    return this.page.url();
  }
}
