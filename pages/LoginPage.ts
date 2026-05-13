import { Page } from '@playwright/test';


export class LoginPage {
  constructor(private page: Page) { }

  // Define locators for the login page elements
  private locators = {
    loginLogo: '.login_logo',
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
  };

  // Method to navigate to the login page
  async navigate() {
    await this.page.goto(process.env.BASE_URL!);
  }

  // Method to perform login action
  async login(username: string, password: string) {
    await this.page.fill(this.locators.usernameInput, username);
    await this.page.fill(this.locators.passwordInput, password);
    await this.page.click(this.locators.loginButton);
  }

  //Method to perform logout action
  async logout() {
    await this.page.click('#react-burger-menu-btn');
    await this.page.waitForSelector('#logout_sidebar_link');
    await this.page.click('#logout_sidebar_link');
  }

  // Methods to get page information
  async getPageUrl() {
    return this.page.url();
  }

  async getPageTitle() {
    return this.page.title();
  }

  async getUsernamePlaceholder() {
    return this.page.getAttribute(this.locators.usernameInput, 'placeholder');
  }

  async getPasswordPlaceholder() {
    return this.page.getAttribute(this.locators.passwordInput, 'placeholder');
  }

  async isErrorVisible() {
    return this.page.isVisible(this.locators.errorMessage);
  }
}