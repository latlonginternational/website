/** @type {import('tailwindcss').Config} */
export default {
	content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1300px"
			}
		},
		extend: {
			colors: {
				conult: {
					gray: "#7a838b",
					"gray-rgb": "122, 131, 139",
					white: "#ffffff",
					"white-rgb": "255, 255, 255",
					black: "#031430",
					"black-rgb": "0, 41, 75",
					base: "#00aeef",
					"base-rgb": "5, 117, 188"
				}
			},
			fontFamily: {
				conult: ['"DM Sans"', "sans-serif"],
				"conult-reey": ['"reeyregular"', "sans-serif"]
			}
		}
	},
	plugins: []
};
