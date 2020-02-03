module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/base',
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended',
	],
	rules: {
		'semi': ['error', 'never'],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab']
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
