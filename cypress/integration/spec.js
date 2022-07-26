describe('The Product Page', () => {
    it('contains all necessary elements', () => {
        // visit
        cy.visit('/p/76907250/');

        // check if bought-together-products is visible
        cy.get('#bought-together-products')
            .should('be.visible');

        // check if same-serie-products is visible
        cy.get('#same-serie-products')
            .should('be.visible');
    })
})
