module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		minWidth: {
			"32px": "32px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};