import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';


Then('shopping cart icon should be visible', async function () {
    expect(await this.productsPage.isCartButtonVisible()).toBe(true);
});

Then('burger menu icon should be visible', async function () {
    expect(await this.productsPage.isBurgerMenuVisible()).toBeTruthy();
});

Then('all inventory item names should match expected list:', async function (dataTable) {
    const expectedItems = dataTable.raw().flat();
    const actualItems = await this.productsPage.getProductNames();
    expect(actualItems).toEqual(expectedItems);
});

When('I add a product to the cart', async function () {
    await this.productsPage.addProductToCart('Sauce Labs Backpack');
});

When('I add {string} to the cart', async function (productName: string) {
    await this.productsPage.addProductToCart(productName);
});

Then('cart badge count should be {int}', async function (count: number) {
    expect(Number(await this.productsPage.getCartBadgeCount())).toBe(count);
});

Then('added item should show in cart', async function () {

    expect(await this.productsPage.isCartBadgeVisible()).toBeTruthy();
});


When('I open the burger menu', async function () {
    await this.productsPage.openBurgerMenu();
});
Then('the following sidebar items should be visible:', async function (dataTable) {
    const expectedItems = dataTable.raw().flat();
    const actualItems = await this.productsPage.getSidebarItems();
    expect(actualItems).toEqual(expectedItems);
});
