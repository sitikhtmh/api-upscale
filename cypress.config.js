const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      apiUrl: "https://upscale.edudev.xyz/login/member",
      userEmail: "lala@gmail.com",
      userPassword: "lala123",
    },
    e2e: {
      setupNodeEvents(on, config) {},
    },
  },
});
