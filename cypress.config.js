const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    hideXHR: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
