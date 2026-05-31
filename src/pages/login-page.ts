import { Page, expect } from "@playwright/test";
import { BasePage } from "../utils/base-page";
import { Config } from "../utils/config";

export class LoginPage extends BasePage {
  private readonly usernameInput = "#username";
  private readonly passwordInput = "#password";
  private readonly loginButton   = "button[type=submit]";
  private readonly flashMessage  = "#flash";

  constructor(page: Page) {
    super(page);
  }

  async navigateToLogin(): Promise<this> {
    await this.page.goto(Config.BASE_URL + "/login");
    return this;
  }

  async enterUsername(username: string): Promise<this> {
    await this.fill(this.usernameInput, username);
    return this;
  }

  async enterPassword(password: string): Promise<this> {
    await this.fill(this.passwordInput, password);
    return this;
  }

  async clickLogin(): Promise<this> {
    await this.click(this.loginButton);
    return this;
  }

  async getFlashMessage(): Promise<string> {
    return await this.getText(this.flashMessage);
  }

  async isFlashVisible(): Promise<boolean> {
    return await this.isVisible(this.flashMessage);
  }

  async expectError(message: string): Promise<void> {
    await expect(this.page.locator(this.flashMessage)).toContainText(message);
  }

  async login(username: string, password: string): Promise<this> {
    await this.navigateToLogin();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    return this;
  }
}
