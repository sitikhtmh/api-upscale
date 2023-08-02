describe("Home", () => {
  it("Register to website", () => {
    var user = {
      username: "siti",
      email: "siti.khotimah.ft17@gmail.com",
      password: "qa123",
      password_confirmation: "qa123",
      phone_number: "+62 812345678",
      refrensi: "Telegram",
    };
    cy.request("POST", "https://upscale.edudev.xyz/register/talent/step1", user).then((response) => {
      expect(response.status).equal(200);
    });
  });
});
