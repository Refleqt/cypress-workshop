import {Given, When} from 'cypress-cucumber-preprocessor/steps';
import home_page from '../pages/home_page';

beforeEach(() => {
 cy.viewport(1920,1080)
})

afterEach(() => {
  cy.screenshot({capture: 'viewport'})
})

/*
  ____ _____     _______ _   _
 / ___|_ _\ \   / / ____| \ | |
| |  _ | | \ \ / /|  _| |  \| |
| |_| || |  \ V / | |___| |\  |
 \____|___|  \_/  |_____|_| \_|
 */

Given('I navigate to {string}', (url) => {
  cy.visit(url)
});

Given('I navigate to the homepage of coolblue', () => {
  cy.visit(Cypress.config('url'))
});

/*
__        ___   _ _____ _   _
\ \      / / | | | ____| \ | |
 \ \ /\ / /| |_| |  _| |  \| |
  \ V  V / |  _  | |___| |\  |
   \_/\_/  |_| |_|_____|_| \_|
*/

When('I accept the usage of cookies', () => {
  home_page.acceptCookies()
});

Given('I pre-authenticate and am on homepage', function () {
  cy.visit(Cypress.config('url'))

  home_page
  .clickLogin()
  .enterEmail(Cypress.config('username'))
  .enterPassword(Cypress.config('password'))
  .clickSubmit();
});
