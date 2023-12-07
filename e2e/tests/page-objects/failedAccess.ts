
function failedAccess(){
    return{
        acceptAllBtn: page.frameLocator('internal:role=dialog[name="Fereastra Managerului de"i]').getByRole('button', { name: 'Accept tot' }),
        submitBtn:page.getByRole('button', { name: 'Submit' }),
        informationMsg: page.getByText('Email ID must not be blank')
    }
}

class AccessFailed{
    async openPage(url:string){
        await page.goto(url);
    }
    async clickAcceptAllBtn(){
        await failedAccess().acceptAllBtn.click();
    }
    async pressSubmitButton(){
        await failedAccess().submitBtn.click();
    }
    async infoMessage(){
        await failedAccess().informationMsg.isVisible();
    }
}
export const accessFailed = new AccessFailed();