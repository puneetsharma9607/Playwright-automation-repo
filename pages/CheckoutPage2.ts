import { Page } from '@playwright/test';

export class CheckoutPage2 {
  constructor(private page: Page) {}

  private locators = {
    finishButton: '[data-test="finish"]',
    orderSuccessMessage: '.complete-header',
  };

  async clickFinish() {
    await this.page.click(this.locators.finishButton);
  }

  async getSuccessMessage() {
    return this.page.textContent(this.locators.orderSuccessMessage);
  }

  async getPageUrl() {
    return this.page.url();
  }
}
