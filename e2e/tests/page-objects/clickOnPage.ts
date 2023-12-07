function clickOnSiteItems() {
    return {
        acceptAllBtn: page.frameLocator('internal:role=dialog[name="Fereastra Managerului de confidențialitate"i]').getByRole('button', { name: 'Accept tot' }),
        seoLabel: page.getByRole('link', { name: 'SEO' }),
        choosePageOne: page.getByRole('link', { name: 'Page-1' })
    }
}

class ClickOnPage {
    async openPage(url: string) {
        await page.goto(url);
    }
    async clickAcceptBtn() {
        await clickOnSiteItems().acceptAllBtn.click();
    }
    async clickSeoLabel() {
        await clickOnSiteItems().seoLabel.click();
    }
    async choosePageOne() {
        await clickOnSiteItems().choosePageOne.click();
    }
}
export const clickOnPage = new ClickOnPage();