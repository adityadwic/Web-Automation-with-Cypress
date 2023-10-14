const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      // implement node event listeners here
      defaultCommandTimeout: 5000
    },
    "include": ["node_modules/cypress", "./cypress/**/*.js"]
  },
  
});
