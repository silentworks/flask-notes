/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./templates/**/*.{html,htm}'],
	safelist: [
		'alert-info',
		'alert-error',
	],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],

	daisyui: {
		themes: ['winter']
	}
};
