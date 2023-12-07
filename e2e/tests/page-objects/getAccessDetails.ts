import { setDefaultTimeout } from "@cucumber/cucumber";
import {expect, Page , ElementHandle} from "@playwright/test";


function accessinfo() {
    return{
        acceptAllBtn: page.frameLocator('internal:role=dialog[name="Fereastra Managerului de confidențialitate"i]').getByRole('button', { name: 'Accept tot' }),
        emailField: page.getByRole('textbox'),
        submitButton:page.getByRole('button', { name: 'Submit' })
    }
}

class GetAccessInformation {
    async openPage(url:string) {
        await page.goto(url);
    }

    // async clickAcceptBtn() {
    //     await accessinfo().acceptAllBtn.click();
    // }

    async fillEmailField(){
        await accessinfo().emailField.fill("adriangula25@gmailcom");
    }

    async clickSubmitBtn(){
        await accessinfo().submitButton.click();
    }   
}

export const getAccessInformation = new GetAccessInformation();



