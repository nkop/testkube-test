describe('The Product Page', () => {
    it('contains all necessary elements', () => {
        // visit
        cy.visit('https://sanitairwinkel.nl/p/76907250/');
        cy.log(cy.url());

        // check if bought-together-products is visible
        cy.get('#bought-together-products')
            .should('be.visible');

        // check if same-serie-products is visible
        cy.get('#same-serie-products')
            .should('be.visible');
    })
})
