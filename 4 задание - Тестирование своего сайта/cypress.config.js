const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920, // Ширина по умолчанию
    viewportHeight: 1080, // Высота по умолчанию
  },
});

