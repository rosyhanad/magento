const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false, //some website hard to acceses because security of the chrome, this way to disable it
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
