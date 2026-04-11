import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { calculateStats, getTopN } from '../utils/priceUtils';
import { generateUser } from '../utils/dataGenerator';

test('End to End Flow', async ({ page }) => {

  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await home.open();
  await expect(page).toHaveTitle(/STORE/);

  // Step 3
  await home.clickCategory('Laptops');

  // Step 4
  const products = await product.getProducts();
  expect(products.length).toBeGreaterThan(0);

  const prices = products.map(p => p.price);

  // Step 6
  const stats = calculateStats(prices);
  console.log(stats);

  // Step 7
  const top2 = getTopN(products, 2);
  console.log(top2);

  // Step 8
  const secondExpensive = top2[1];
  await product.selectProduct(secondExpensive.name);

  // Step 9
  await product.addToCart();

  // Step 10
  await cart.openCart();

  // Step 11
  const cartPrices = await cart.getCartPrices();
  expect(cartPrices).toContain(secondExpensive.price);

  // Step 12 (Add phone)
  await home.open();
  await home.clickCategory('Phones');
  const phoneProducts = await product.getProducts();
  await product.selectProduct(phoneProducts[0].name);
  await product.addToCart();

  await cart.openCart();

  // Step 13 & 14
  const allPrices = await cart.getCartPrices();
  const total = await cart.getTotal();

  const sum = allPrices.reduce((a, b) => a + b, 0);
  expect(total).toBe(sum);

  // Step 15–17
  await cart.placeOrder();

  const user = generateUser();
  await cart.fillForm(user);
  await cart.purchase();

  // Step 18–19
  const confirmation = await cart.getConfirmationText();
  expect(confirmation).toContain('Thank you');

})