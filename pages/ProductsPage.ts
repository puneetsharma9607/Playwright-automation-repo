import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private locators = {
    productItem: '.inventory_item',
    productsTitle: '.title',
  };

  async isProductsPageVisible() {
    return this.page.isVisible(this.locators.productsTitle);
  }

  async getProductCount() {
    return this.page.locator(this.locators.productItem).count();
  }

  async isAnyProductVisible() {
    return (await this.getProductCount()) > 0;
  }
}
