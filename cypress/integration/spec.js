describe('The Product Page', () => {
    it('successfully loads', () => {
        // visit
        cy.visit('https://www.sanitairwinkel.nl/p/76907250/adema-circle-badkamerspiegel-rond-diameter-60cm-met-indirecte-led-verlichting-met-spiegelverwarming-en-touch-schakelaar');
        //
        // // check if bought-together-products is visible
        // cy.get('#bought-together-products')
        //     .should('be.visible');
        //
        // // check if same-serie-products is visible
        // cy.get('#same-serie-products')
        //     .should('be.visible');
    })
})
