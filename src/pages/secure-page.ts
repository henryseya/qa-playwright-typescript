import { Page, expect } from "@playwright/test";
import { BasePage } from "../utils/base-page";

export class SecurePage extends BasePage {
  private readonly header       = "h2";
  private readonly flashMessage = "#flash";
  private readonly logoutButton = "a.button";

  constructor(page: Page) {
    super(page);
  }

  async isLoaded(): Promise<boolean> {
    const headerVisible = await this.isVisible(this.header);
    const urlCorrect    = this.getCurrentUrl().includes("/secure");
    return headerVisible && urlCorrect;
  }

  async getWelcomeMessage(): Promise<string> {
    return await this.getText(this.flashMessage);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*\/secure/);
  }
}
