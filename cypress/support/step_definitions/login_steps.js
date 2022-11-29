import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import data_helper from '../helper/data_helper';
import home_page from '../pages/home_page';
import login_page from '../pages/login_page';
import my_account_page from '../pages/my_account_page';

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/

When('I login with:', (dataTable) => {
    let user = data_helper.toMap(dataTable);

    home_page
        .clickLogin()
        .enterEmail(user.get('username'))
        .enterPassword(user.get('password'))
        .clickSubmit()
})

When('I login with valid credentials', () => {
    home_page
    .clickLogin()
    .enterEmail(Cypress.config('username'))
    .enterPassword(Cypress.config('password'))
    .clickSubmit()
})

/*
 _____ _   _ _____ _   _
|_   _| | | | ____| \ | |
  | | | |_| |  _| |  \| |
  | | |  _  | |___| |\  |
  |_| |_| |_|_____|_| \_|
 */

Then('I see the my account page', () => {
    my_account_page.validateAccountPage()
})

Then('Authentication failed error is displayed', () => {
    login_page.validateError('De combinatie van het e-mailadres en het wachtwoord is niet bij ons bekend.')
})