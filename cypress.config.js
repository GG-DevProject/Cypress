const { defineConfig } = require("cypress")

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',

  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter',

    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },

  chromeWebSecurity: false,

  e2e: {
    video: true,
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) { require('cypress-mochawesome-reporter/plugin')(on) },
  },
})