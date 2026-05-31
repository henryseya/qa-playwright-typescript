import { Page, expect } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<this> {
    await this.page.goto(url);
    return this;
  }

  async click(locator: string): Promise<this> {
    await this.page.locator(locator).click();
    return this;
  }

  async fill(locator: string, text: string): Promise<this> {
    await this.page.locator(locator).fill(text);
    return this;
  }

  async getText(locator: string): Promise<string> {
    return await this.page.locator(locator).innerText();
  }

  async isVisible(locator: string): Promise<boolean> {
    return await this.page.locator(locator).isVisible();
  }

  getCurrentUrl(): string {
    return this.page.url();
  }

  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({ path, fullPage: true });
  }
}
