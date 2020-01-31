module.exports = {
	moduleFileExtensions: [
		'js',
		'json',
		'vue',
		'ts'
	],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'^.+\\.svg$': '<rootDir>/tests/svgTransform.js',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
		'^.+\\.js$': 'babel-jest'
	},
	testMatch: [
		'**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
	],
	testURL: 'http://localhost/',
	collectCoverageFrom: ['src/components/**/*.{vue,js}', 'src/views/**/*.vue'],
	collectCoverage: true,
	coveragePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/dist/'
	],
	coverageDirectory: 'coverage',
	cache: false,
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname'
	],
	globals: {
		"vue-jest": {
			resources: {
				scss: [
					"./src/assets/scss/_variables.scss",
					"./src/assets/scss/_functions.scss",
				]
			},
			experimentalCSSCompile: true
		}
	},
	restoreMocks: true
}
