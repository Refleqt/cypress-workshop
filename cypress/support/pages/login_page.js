class login_page {
  /*
   _____ _     _____ __  __ _____ _   _ _____ ____
  | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
  |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
  | |___| |___| |___| |  | | |___| |\  | | |  ___) |
  |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
  * */

  get emailTxtFld() {
    return cy.get('.js-login-form')
    .find('#login_page_emailaddress')
  }

  get passwordTxtFld() {
    return cy.get('.js-login-form')
    .find('#login_page_password')
  }

  get submitBtn() {
    return cy.get('.js-login-page-password-forgotten .button--order')
    .contains('Inloggen')
  }

  get emailErrorLbl() {
    return cy.get('.js-login-form')
    .find('#login_page_emailaddress-error')
  }

  get passwordErrorLbl() {
    return cy.get('.js-login-form')
    .find('#login_page_password-error')
  }

  get errorLbl() {
    return cy.get('.notice.notice--critical')
  }

  /*
   __  __ _____ _____ _   _  ___  ____  ____
  |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
  | |\/| |  _|   | | | |_| | | | | | | \___ \
  | |  | | |___  | | |  _  | |_| | |_| |___) |
  |_|  |_|_____| |_| |_| |_|\___/|____/|____/
  * */

  enterEmail(email) {
    this.emailTxtFld.type(email, {delay: 200})
    return this
  }

  enterPassword(pass) {
    this.passwordTxtFld.type(pass, {delay: 200})
    return this
  }

  clickSubmit() {
    this.submitBtn.click({force: true})
    return this
  }

  validateEmailError(error){
    this.emailErrorLbl.should('be.visible')
    .and('contain', error)
  }

  validatePasswordError(error){
    this.passwordErrorLbl.should('be.visible')
    .and('contain', error)
  }

  validateError(error) {
    this.errorLbl
    .should('be.visible')
    .and('contain', error)
  }

}

export default new login_page()
