import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

Given('I am on the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

Then('the page URL should be {string}', async function (expectedUrl: string) {
  expect(await this.loginPage.getPageUrl()).to.equal(expectedUrl);
});

Then('the page title should be {string}', async function (expectedTitle: string) {
  expect(await this.loginPage.getPageTitle()).to.equal(expectedTitle);
});

Then(
  'the username input should have placeholder {string}',
  async function (expected: string) {
    expect(await this.loginPage.getUsernamePlaceholder()).to.equal(expected);
  }
);

Then(
  'the password input should have placeholder {string}',
  async function (expected: string) {
    expect(await this.loginPage.getPasswordPlaceholder()).to.equal(expected);
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

  expect(await this.productsPage.isProductsPageVisible()).to.be.true;
  expect(await this.productsPage.isAnyProductVisible()).to.be.true;
});

When('I login with invalid credentials', async function () {
  await this.loginPage.login(
    process.env.INVALID_USER!,
    process.env.INVALID_PASSWORD!
  );
});

Then('login should not be successful', async function () {
  expect(await this.loginPage.isErrorVisible()).to.be.true;
});
