// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/public/assets/css/main.css"],

	modules: ["nuxt-mail"],

	runtimeConfig: {
		mail: {
			message: {
				to: ["hello@vincentasani.me", "info@latlongcongo.com"]
			},
			smtp: {
				host: process.env.SMTP_HOST || "smtp.titan.email",
				port: process.env.SMTP_PORT,
				secure: false,
				auth: {
					user: process.env.SMTP_USER,
					pass: process.env.SMTP_PASS
				}
			}
		}
	},

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},

	app: {
		head: {
			title: "LatLong International", // Autres méta-informations

			meta: [
				{ charset: "utf-8" }, // Définir le charset
				{ name: "viewport", content: "width=device-width, initial-scale=1.0" }, // Viewport responsive
				{ name: "description", content: "LatLong International - Your Gateway to Secure Business in Africa" }, // Description
				{ name: "format-detection", content: "telephone=no" },
				{ property: "og:title", content: "LatLong International" },
				{
					property: "og:description",
					content: "LatLong International - Your Gateway to Secure Business in Africa"
				},
				{ property: "og:url", content: "https://latlong.witoxr.app" },
				{
					property: "og:image",
					content: "/cover.png"
				},
				{ name: "twitter:title", content: "LatLong International" },
				{
					name: "twitter:description",
					content: "LatLong International - Your Gateway to Secure Business in Africa"
				},
				{
					name: "twitter:image",
					content: "/cover.png"
				},
				{ name: "twitter:card", content: "summary_large_image" }
			],
			link: [
				// Favicon and manifest links
				{
					rel: "icon",
					type: "image/png",
					href: "/favicons/favicon-96x96.png",
					sizes: "96x96"
				},
				{
					rel: "icon",
					type: "image/svg+xml",
					href: "/favicons/favicon.svg"
				},
				{
					rel: "shortcut icon",
					href: "/favicons/favicon.ico"
				},
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/favicons/apple-touch-icon.png"
				},
				{
					rel: "manifest",
					href: "/favicons/site.webmanifest"
				},
				// Fonts
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
				},
				// CSS stylesheets
				{ rel: "stylesheet", href: "/assets/vendors/bootstrap/css/bootstrap.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/animate/animate.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/animate/custom-animate.css" },
				{ rel: "stylesheet", href: "/assets/vendors/fontawesome/css/all.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/jarallax/jarallax.css" },
				{ rel: "stylesheet", href: "/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css" },
				{ rel: "stylesheet", href: "/assets/vendors/nouislider/nouislider.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/nouislider/nouislider.pips.css" },
				{ rel: "stylesheet", href: "/assets/vendors/odometer/odometer.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/swiper/swiper.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/conult-icons/style.css" },
				{ rel: "stylesheet", href: "/assets/vendors/tiny-slider/tiny-slider.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/reey-font/stylesheet.css" },
				{ rel: "stylesheet", href: "/assets/vendors/owl-carousel/owl.carousel.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/owl-carousel/owl.theme.default.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/bxslider/jquery.bxslider.css" },
				{ rel: "stylesheet", href: "/assets/vendors/bootstrap-select/css/bootstrap-select.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/vegas/vegas.min.css" },
				{ rel: "stylesheet", href: "/assets/vendors/jquery-ui/jquery-ui.css" },
				{ rel: "stylesheet", href: "/assets/vendors/timepicker/timePicker.css" },
				// Template styles
				{ rel: "stylesheet", href: "/assets/css/conult.css" },
				{ rel: "stylesheet", href: "/assets/css/conult-responsive.css" }
			],
			script: [
				{ src: "/assets/vendors/jquery/jquery-3.6.0.min.js", defer: true },
				{ src: "/assets/vendors/bootstrap/js/bootstrap.bundle.min.js", defer: true },
				{ src: "/assets/vendors/jarallax/jarallax.min.js", defer: true },
				{ src: "/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js", defer: true },
				{ src: "/assets/vendors/jquery-appear/jquery.appear.min.js", defer: true },
				{ src: "/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js", defer: true },
				{ src: "/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js", defer: true },
				{ src: "/assets/vendors/jquery-validate/jquery.validate.min.js", defer: true },
				{ src: "/assets/vendors/nouislider/nouislider.min.js", defer: true },
				{ src: "/assets/vendors/odometer/odometer.min.js", defer: true },
				{ src: "/assets/vendors/swiper/swiper.min.js", defer: true },
				{ src: "/assets/vendors/tiny-slider/tiny-slider.min.js", defer: true },
				{ src: "/assets/vendors/wnumb/wNumb.min.js", defer: true },
				{ src: "/assets/vendors/wow/wow.js", defer: true },
				{ src: "/assets/vendors/isotope/isotope.js", defer: true },
				{ src: "/assets/vendors/countdown/countdown.min.js", defer: true },
				{ src: "/assets/vendors/owl-carousel/owl.carousel.min.js", defer: true },
				{ src: "/assets/vendors/bxslider/jquery.bxslider.min.js", defer: true },
				{ src: "/assets/vendors/bootstrap-select/js/bootstrap-select.min.js", defer: true },
				{ src: "/assets/vendors/vegas/vegas.min.js", defer: true },
				{ src: "/assets/vendors/jquery-ui/jquery-ui.js", defer: true },
				{ src: "/assets/vendors/timepicker/timePicker.js", defer: true },
				{ src: "/assets/js/conult.js", defer: true } // Script principal de votre template
			]
		}
	}
});
