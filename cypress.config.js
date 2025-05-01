const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', 
    supportFile: 'cypress/support/e2e.js',
    screenshotOnRunFailure: true, 
    screenshotsFolder: 'cypress/screenshots',
    video: false, 
      chromeWebSecurity: false
    
    
  },
});
