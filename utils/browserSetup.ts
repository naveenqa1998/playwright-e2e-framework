import { chromium } from '@playwright/test';

export async function launchBrowser() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  return { browser, page };
}