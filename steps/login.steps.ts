import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { expect } from 'chai';
import credentials from '../data/credentials.json';

let loginPage: LoginPage;

Given('I am on the login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.goTo();
    console.log('Navigated to login page');
});

Then('the page URL should be {string}', async function (expectedUrl: string) {
    expect(this.page.url()).to.equal(expectedUrl);
    console.log('Page URL validated');
});

Then('the page title should be {string}', async function (expectedTitle: string) {
    expect(await this.page.title()).to.equal(expectedTitle);
    console.log('Page title validated');
});

Then('the username input should have placeholder {string}', async function (expectedPlaceholder: string) {
    const actual = await this.page.getAttribute(loginPage.locators.input_userName, 'placeholder');
    expect(actual).to.equal(expectedPlaceholder);
    console.log('Username input placeholder validated');
});

Then('the password input should have placeholder {string}', async function (expectedPlaceholder: string) {
    const actual = await this.page.getAttribute(loginPage.locators.input_password, 'placeholder');
    expect(actual).to.equal(expectedPlaceholder);
    console.log('Password input placeholder validated');
});

Then('the login button should have text {string}', async function (expectedText: string) {
    const actual = await this.page.textContent(loginPage.locators.btn_login);
    expect(actual?.trim()).to.equal(expectedText);
    console.log('Login button text validated');
});

When('I login with username {string} and password {string}', async function (username: string, password: string) {
    await loginPage.login(credentials.username, credentials.password);
    console.log(`Attempted login with username: ${username}`);
});


When('I login with valid credentials', async function () {
  await loginPage.login(credentials.username, credentials.password);
  console.log('Attempted login with valid credentials');
});

When('I login with invalid credentials', async function () {
  // Use obviously invalid credentials
  await loginPage.login('invalid_user', 'invalid_pass');
  console.log('Attempted login with invalid credentials');
});

Then('I should see the products page', async function () {
  await this.page.waitForSelector('.inventory_list');
  const url = this.page.url();
  expect(url).to.include('/inventory.html');
  console.log('Login successful: Products page is visible');
});

Then('login should not be successful', async function () {
  await this.page.waitForTimeout(1000);
  const url = this.page.url();
  expect(url).to.equal('https://www.saucedemo.com/');
  console.log('Login unsuccessful: Still on login page');
});