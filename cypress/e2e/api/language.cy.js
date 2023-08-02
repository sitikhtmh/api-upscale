describe('Get Users', () => {
    it('Verify the language ID will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://upscale.edudev.xyz/?lang=id',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });

    it('Verify the language EN will displayed', () => {
        cy.request({
            method: 'GET',
            url: 'https://upscale.edudev.xyz/?lang=en',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    });
 });
 