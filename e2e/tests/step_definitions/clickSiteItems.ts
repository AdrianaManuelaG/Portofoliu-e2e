import { clickOnPage } from "../page-objects/clickOnPage";
import { Given, When, Then } from "@cucumber/cucumber";

Given("I navigate to home page", async function () {
    await clickOnPage.openPage("https://www.demo.guru99.com");
    await clickOnPage.clickAcceptBtn();
});
When("I click on seo label", async function () {
    await clickOnPage.clickSeoLabel();
});
Then("I choose 'page one'", async function () {
    await clickOnPage.choosePageOne();
});