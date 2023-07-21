import { test, expect } from '@playwright/test';
import { openBrowser } from '../testSetupI';


test('open the page', async ({page}) => {
    await openBrowser(page);
})