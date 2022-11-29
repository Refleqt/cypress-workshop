class my_account_page {
    /*
     __  __ _____ _____ _   _  ___  ____  ____
    |  \/  | ____|_   _| | | |/ _ \|  _ \/ ___|
    | |\/| |  _|   | | | |_| | | | | | | \___ \
    | |  | | |___  | | |  _  | |_| | |_| |___) |
    |_|  |_|_____| |_| |_| |_|\___/|____/|____/
    * */

    validateAccountPage() {
        cy.title().should('contain', 'Mijn Coolblue - Coolblue - alles voor een glimlach')
    }

}

export default new my_account_page()