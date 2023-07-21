import { Page } from "playwright-core";

export async function openBrowser (page: Page) {
    await page.goto('https://www.aboutyou.ro/');
};