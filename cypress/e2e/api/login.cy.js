describe('Home', () => {
    it('Login to website', () => {
        var user = {
            email: "lala@gmail.com",
            password: "lala123",
          };
          cy.request("POST", "https://upscale.edudev.xyz/login/member", user).then((response) => {
            expect(response.status).equal(200);
          });
    });
 });
 