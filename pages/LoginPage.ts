import { Page } from '@playwright/test';


export class LoginPage {
  constructor(private page: Page) {}

  private locators = {
    loginLogo: '.login_logo',
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
  };

  async navigate() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.locators.usernameInput, username);
    await this.page.fill(this.locators.passwordInput, password);
    await this.page.click(this.locators.loginButton);
  }

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