const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: false, // disable recording video for cypress run
    e2e: {
        baseUrl: 'https://localhost:3000',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        blockHosts: [
            '*.hotjar.com',
            '*.datatrics.com',
            '*.google-analytics.com',
            '*.googletagmanager.com'
        ],
    },
});
