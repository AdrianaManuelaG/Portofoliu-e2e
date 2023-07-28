import { test, expect } from '@playwright/test';
import { openBrowser } from '../testSetupI';

// first test
test('open the page', async ({page}) => {
    await openBrowser(page);
})