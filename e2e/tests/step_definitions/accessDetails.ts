import { getAccessInformation } from "../page-objects/getAccessDetails";
import {Given, When, Then} from "@cucumber/cucumber";
import { chromium, firefox, webkit } from '@playwright/test';

Given("I open the home page", async function(){
    await getAccessInformation.openPage("https://www.demo.guru99.com/");
});
// When("I click on accept all button",{timeout: 2 * 8000},async function(){
//     await getAccessInformation.clickAcceptBtn();
// });
When("I fill the  email field", async function(){
    await getAccessInformation.fillEmailField();
});
Then("I clik on submit button", async function(){
    await getAccessInformation.clickSubmitBtn();
});
