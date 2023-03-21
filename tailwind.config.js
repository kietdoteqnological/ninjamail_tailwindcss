module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		colors: {
			btnBgColor: '#4BA87D',
			tahiti: '#3ab7bf',
		},
	},
	screen: {
		ml: { max: '1024px' },
		md: { max: '768px' },
		ms: { max: '320px' },
	},
	plugins: [],
};
