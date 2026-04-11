import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async getProducts() {
    // ADD THIS LINE (WAIT FOR PRODUCTS TO LOAD)
    await this.page.waitForSelector('.card-title');
    const products = await this.page.locator('.card-title').allTextContents();
    const prices = await this.page.locator('.card-block h5').allTextContents();

    return products.map((name, i) => ({
      name,
      price: parseInt(prices[i].replace('$', ''))
    }));
  }

  async selectProduct(name: string) {
    await this.page.locator(`//a[text()='${name}']`).click();
  }

  async addToCart() {
    await this.page.click('text=Add to cart');
    this.page.once('dialog', dialog => dialog.accept());
  }
}