import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async clickCategory(category: string) {
    await this.page.locator(`//a[text()='${category}']`).click();
  }
}