import {Given, When, Then} from "@cucumber/cucumber"
import { accessFailed } from "../page-objects/failedAccess"

Given("I open the page", async function(){
    await accessFailed.openPage("https://www.demo.guru99.com");
    await accessFailed.clickAcceptAllBtn();
});

When("I click on submit button without email input", async function(){
    await accessFailed.pressSubmitButton();
});
Then("I shoul recive an message with instruction",async function(){
    await accessFailed.infoMessage();
});