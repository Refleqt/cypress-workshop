import login_page from './login_page';

class home_page {

  /*
   _____ _     _____ __  __ _____ _   _ _____ ____
  | ____| |   | ____|  \/  | ____| \ | |_   _/ ___|
  |  _| | |   |  _| | |\/| |  _| |  \| | | | \___ \
  | |___| |___| |___| |  | | |___| |\  | | |  ___) |
  |_____|_____|_____|_|  |_|_____|_| \_| |_| |____/
  * */

  get searchFld() {
    return cy.get('.search').find('input')
  }

  get productTiles() {
    return cy.get('.product-grid__card')
  }

  get loginMenuBtn() {
    return cy.get('.coolbar-navigation--item')
    .contains('Account')
  }

  get shoppingCartMenuBtn() {
    return cy.get('.coolbar-navigation--item')
    .contains('Winkelmand')
  }

  get shoppingPopupCloseBtn() {
    return cy.get('.overlay-header__button-close')
  }

  get cookieBtn() {
    return cy.get('.cookie-notification__body')
    .find('button')
    .contains('Oké')
  }

  /*
   __  __ _____ _____ _   _  ___  ____  ____
  |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
  | |\/| |  _|   | | | |_| | | | | | | \___ \
  | |  | | |___  | | |  _  | |_| | |_| |___) |
  |_|  |_|_____| |_| |_| |_|\___/|____/|____/
  * */

  searchForItem(item) {
    this.searchFld
    .type(item)
    .wait(1000)
    .type('{ENTER}')
    return this
  }

  findProductAndValidate(productName, datatable) {
    this.productTiles
    .find('.product-card__title')
    .contains(productName).parent().parent().parent().within((el) => {
      datatable.forEach(row => {
        let field = row[0]
        let value = row[1]

        switch (field) {
          case 'price':
            cy.get('.sales-price__current').contains(value)

            break;
          default:
            throw new Error(`option for ${field} is not available`)
        }
      })
    })
    return this
  }

  addToShoppingCart(productName) {
    this.productTiles
    .find('.product-card__title')
    .contains(productName).parent().parent().parent()
    .within((el) => {
      cy.get('.button.button--order').click()
    })
    return this
  }

  validateShoppingCartItems(amount) {
    this.shoppingCartMenuBtn
    .should('contain', amount)
    return this
  }

  closeShoppingCartPopup() {
    this.shoppingPopupCloseBtn.click()
    return this
  }

  clickLogin() {
    this.loginMenuBtn
    .click()

    this.loginMenuBtn
    .should('have.attr', 'href')
    .then((href) => cy.visit(href))

    return login_page
  }

  acceptCookies() {
    this.cookieBtn.click()
    return this
  }

}

export default new home_page()
