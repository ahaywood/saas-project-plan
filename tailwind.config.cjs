/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				1: '1px'
			},
			colors: {
				black: '#221f1f',
				tulipTree: '#f4b940',
				whiteSmoke: '#f6f5f5', /* light gray */
				lightGray: '#d3d2d2',
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: [],
}
