describe('Home', () => {
    it('Verify home displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://upscale.edudev.xyz/',
          }).as('upscale')
          cy.get('@upscale').its('status').should('equal', 200)
    });
 });
 