import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

Then('the page URL should be {string}', async function (expectedUrl: string) {
  expect(await this.loginPage.getPageUrl()).toBe(expectedUrl);
});

Then('the page title should be {string}', async function (expectedTitle: string) {
  expect(await this.loginPage.getPageTitle()).toBe(expectedTitle);
});

Then(
  'the username input should have placeholder {string}',
  async function (expected: string) {
    expect(await this.loginPage.getUsernamePlaceholder()).toBe(expected);
  }
);

Then(
  'the password input should have placeholder {string}',
  async function (expected: string) {
    expect(await this.loginPage.getPasswordPlaceholder()).toBe(expected);
  }
);

When('I login with valid credentials', async function () {
  await this.loginPage.login(
    process.env.STANDARD_USER!,
    process.env.PASSWORD!
  );
});

Then('I should see the products page', async function () {
  this.productsPage = new ProductsPage(this.page);

  expect(await this.productsPage.isProductsPageVisible()).toBe(true);
  expect(await this.productsPage.isAnyProductVisible()).toBe(true);
});

When('I login with invalid credentials', async function () {
  await this.loginPage.login(
    process.env.INVALID_USER!,
    process.env.INVALID_PASSWORD!
  );
});

Then('login should not be successful', async function () {
  expect(await this.loginPage.isErrorVisible()).toBe(true);
});

When('I login with empty username', async function () {
  await this.loginPage.login(
    '',
    process.env.PASSWORD!
  );
});

Then('I should see an error message for empty username', async function () {
  expect(await this.loginPage.isErrorVisible()).toBe(true);
});

When('I login with empty password', async function () {
  await this.loginPage.login(
    process.env.STANDARD_USER!,
    ''
  );
});

Then('I should see an error message for empty password', async function () {
  expect(await this.loginPage.isErrorVisible()).toBe(true);
});

Given('I am a logged in user', async function () {
  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigate();

  await this.loginPage.login(
    process.env.STANDARD_USER!,
    process.env.PASSWORD!
  );
});

When('I logout from the application', async function () {
  await this.loginPage.logout();
});

Then('I should be redirected to login page', async function () {
  expect(await this.loginPage.getPageUrl()).toBe(
    'https://www.saucedemo.com/'
  );
});