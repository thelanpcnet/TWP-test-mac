const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'riq1j8',
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		specPattern: './cypress/e2e/**.*',
		baseUrl: 'https://stageone.theworkproject.com',
	},
	experimentalStudio: true,
})
