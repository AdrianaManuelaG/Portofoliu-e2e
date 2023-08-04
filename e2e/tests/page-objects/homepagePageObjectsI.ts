
function getLoginSelectors(){
    return {
        loginMenu: page.getByTestId('UserAccount'),
        submitLoginBtn: page.getByTestId('SubmitLogin'),

        loginBtn: page.getByRole('button', { name: 'logare' }),
        emailTextbox: page.getByRole('textbox', { name: 'Adresa ta de e-mail' }),
        passwordTextbox: page.getByRole('textbox', { name: 'Parolă' }),
    }
};

class LoginObjects {
    async loginFlow(){
        await page.waitForLoadState('domcontentloaded');
        await getLoginSelectors().loginMenu.hover();
        await getLoginSelectors().loginBtn.click();
        //switch tab from "Register" to "Login"
        await getLoginSelectors().loginBtn.click();
        await getLoginSelectors().emailTextbox.fill('user@yahoo.com');
        await getLoginSelectors().passwordTextbox.fill('user-password');
    }

    async openPage(url: string){
        await page.goto(url)
    }
};

export const loginObjects = new LoginObjects();