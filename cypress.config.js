const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false, // Disable video recording of test execution
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
