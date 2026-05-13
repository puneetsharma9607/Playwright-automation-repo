import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage1 } from '../../pages/CheckoutPage1';
import { CheckoutPage2 } from '../../pages/CheckoutPage2';

When('I navigate to the cart', async function () {
  this.cartPage = new CartPage(this.page);
  await this.page.click('[data-test="shopping-cart-link"]');
});

Then('the cart should display the selected item {string}', async function (productName: string) {
  this.cartPage = new CartPage(this.page);
  const cartItems = await this.cartPage.getCartItemNames();
  expect(cartItems).toContain(productName);
});

When('I click the checkout button', async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickCheckout();
  this.checkoutPage1 = new CheckoutPage1(this.page);
});

When('I enter checkout details with first name {string}, last name {string} and ZIP {string}', async function (firstName: string, lastName: string, postalCode: string) {
  this.checkoutPage1 = new CheckoutPage1(this.page);
  await this.checkoutPage1.fillCheckoutInformation(firstName, lastName, postalCode);
});

When('I click continue', async function () {
  this.checkoutPage1 = new CheckoutPage1(this.page);
  await this.checkoutPage1.clickContinue();
  this.checkoutPage2 = new CheckoutPage2(this.page);
});

When('I click finish', async function () {
  this.checkoutPage2 = new CheckoutPage2(this.page);
  await this.checkoutPage2.clickFinish();
});

Then('I should see the order confirmation message {string}', async function (expectedMessage: string) {
  this.checkoutPage2 = new CheckoutPage2(this.page);
  expect(await this.checkoutPage2.getSuccessMessage()).toBe(expectedMessage);
});
