import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) { }

  // Define locators for the products page elements
  private locators = {
    productItem: '.inventory_item',
    productsTitle: '.title',
    burgerMenuButton: '#react-burger-menu-btn',
    cartButton: '[data-test="shopping-cart-link"]',
    addToCartButton: '[data-test^="add-to-cart"]',

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


  async openBurgerMenu() {
    await this.page.click(this.locators.burgerMenuButton);
  }

 async isBurgerMenuVisible() {
  return this.page.isVisible(this.locators.burgerMenuButton);
}

  async getSidebarItems() {

    return this.page.locator('.bm-item.menu-item').allTextContents();
  }

  async isCartButtonVisible() {
    return this.page.isVisible(this.locators.cartButton);
  }

  async getProductNames() {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async addProductToCart(productName: string) {
    const productLocator = this.page.locator(`.inventory_item:has-text("${productName}")`);
    if (await productLocator.isVisible()) {
      await productLocator.locator(this.locators.addToCartButton).click();
    } else {
      throw new Error(`Product "${productName}" not found on the products page.`);
    }
  }

  async isCartBadgeVisible() {
    return this.page.isVisible('.shopping_cart_badge');

  }

  async getCartBadgeCount() {
  return this.page.textContent('.shopping_cart_badge');
}

  async navigateToCart() {
    await this.page.click(this.locators.cartButton);
  }
}