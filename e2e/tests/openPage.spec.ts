import { test } from '@playwright/test';
import { loginObjects } from './page-objects/homepagePageObjectsI';

test('open the page', async ({page}) => {
    // await openBrowser(page);
    await loginObjects.loginFlow(page);

})
