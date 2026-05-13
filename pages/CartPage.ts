import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  private locators = {
    cartItemNames: '.inventory_item_name',
    checkoutButton: '[data-test="checkout"]',
  };

  async getCartItemNames() {
    return this.page.locator(this.locators.cartItemNames).allTextContents();
  }

  async clickCheckout() {
    await this.page.click(this.locators.checkoutButton);
  }

  async getPageUrl() {
    return this.page.url();
  }
}
