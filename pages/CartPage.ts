import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.click('#cartur');
  }

  async getCartPrices() {
   // WAIT FOR CART TABLE ROWS
    await this.page.waitForSelector('#tbodyid tr');
    const prices = await this.page.locator('td:nth-child(3)').allTextContents();
    return prices.map(p => parseInt(p));
  }

  async getTotal() {
    return parseInt(await this.page.locator('#totalp').textContent() || '0');
  }

  async placeOrder() {
    await this.page.locator('button:has-text("Place Order")').click();
  }

  async fillForm(data: any) {
    await this.page.fill('#name', data.name);
    await this.page.fill('#country', data.country);
    await this.page.fill('#city', data.city);
    await this.page.fill('#card', data.card);
    await this.page.fill('#month', data.month);
    await this.page.fill('#year', data.year);
  }

  async purchase() {
    await this.page.click('text=Purchase');
  }

  async getConfirmationText() {
    return await this.page.locator('.sweet-alert').textContent();
  }
}