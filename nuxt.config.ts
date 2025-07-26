// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/public/assets/css/main.css"],
	modules: ["nuxt-mail", "@nuxtjs/i18n"],

	i18n: {
		strategy: "no_prefix",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
			alwaysRedirect: true,
			fallbackLocale: "en"
		},
		locales: [
			{
				code: "en",
				file: "en.json",
				name: "English",
				iso: "en-US"
			},
			{
				code: "fr",
				file: "fr.json",
				name: "Français",
				iso: "fr-FR"
			}
		],
		defaultLocale: "fr",
		lazy: true,
		langDir: "locales/",
		vueI18n: "./i18n.config.ts"
	},

	// Configuration pour éviter la sérialisation des fonctions
	experimental: {
		payloadExtraction: false
	},

	// Configuration Vite
	vite: {
		define: {
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		},
		optimizeDeps: {
			exclude: ["vue-i18n"]
		}
	},

	// Configuration Nitro
	nitro: {
		routeRules: {
			"/**": { 
				cors: true,
				headers: {
					"X-Content-Type-Options": "nosniff",
					"X-Frame-Options": "SAMEORIGIN",
					"X-XSS-Protection": "1; mode=block",
					"Referrer-Policy": "strict-origin-when-cross-origin",
					"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
					"X-DNS-Prefetch-Control": "on",
					"Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
					"Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.mapbox.com https://*.mapbox.com; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self'; worker-src 'self' blob:; child-src 'self' blob:"
				}
			},
			"/sitemap.xml": { 
				headers: { 
					"Content-Type": "application/xml",
					"Cache-Control": "public, max-age=3600"
				} 
			},
			"/robots.txt": { 
				headers: { 
					"Content-Type": "text/plain",
					"Cache-Control": "public, max-age=3600"
				} 
			},
			"/assets/**": {
				headers: {
					"Cache-Control": "public, max-age=31536000, immutable"
				}
			},
			"/images/**": {
				headers: {
					"Cache-Control": "public, max-age=31536000, immutable"
				}
			},
			"/docs/**": {
				headers: {
					"Cache-Control": "public, max-age=86400"
				}
			}
		},

		// Configuration pour la compression et les performances
		compressPublicAssets: true,
		minify: true
	},

	runtimeConfig: {
		mail: {
			message: {
				to: ["info@latlongcongo.com", "vincent@wito-inc.com"]
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
			title: "Latlong International - Sécurité et Protection en RDC",
			htmlAttrs: {
				lang: "fr"
			},
			meta: [
				// Charset et viewport
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0" },
				{ name: "format-detection", content: "telephone=no" },
				
				// Meta tags SEO de base
				{ name: "description", content: "Latlong International - Votre partenaire de confiance pour la sécurité et la protection en République Démocratique du Congo. Services de protection, technologie, consultance et formation depuis 2012." },
				{ name: "keywords", content: "sécurité, protection, RDC, Congo, Goma, Latlong, services de sécurité, protection VIP, surveillance, formation sécurité, consultance sécurité" },
				{ name: "author", content: "Latlong International" },
				{ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
				{ name: "googlebot", content: "index, follow" },
				
				// Open Graph (Facebook, LinkedIn)
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "Latlong International - Sécurité et Protection en RDC" },
				{ property: "og:description", content: "Votre partenaire de confiance pour la sécurité et la protection en République Démocratique du Congo. Services de protection, technologie, consultance et formation depuis 2012." },
				{ property: "og:url", content: "https://latlong.witoxr.app/" },
				{ property: "og:site_name", content: "Latlong International" },
				{ property: "og:image", content: "https://latlong.witoxr.app//cover.png" },
				{ property: "og:image:width", content: "1200" },
				{ property: "og:image:height", content: "630" },
				{ property: "og:image:alt", content: "Latlong International - Services de sécurité en RDC" },
				{ property: "og:locale", content: "fr_FR" },
				
				// Twitter Card
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:site", content: "@latlongcongo" },
				{ name: "twitter:creator", content: "@latlongcongo" },
				{ name: "twitter:title", content: "Latlong International - Sécurité et Protection en RDC" },
				{ name: "twitter:description", content: "Votre partenaire de confiance pour la sécurité et la protection en République Démocratique du Congo." },
				{ name: "twitter:image", content: "https://latlong.witoxr.app//cover.png" },
				{ name: "twitter:image:alt", content: "Latlong International - Services de sécurité en RDC" },
				
				// Additional SEO meta tags
				{ name: "theme-color", content: "#00AEEF" },
				{ name: "msapplication-TileColor", content: "#00AEEF" },
				{ name: "apple-mobile-web-app-capable", content: "yes" },
				{ name: "apple-mobile-web-app-status-bar-style", content: "default" },
				{ name: "apple-mobile-web-app-title", content: "Latlong International" },
				
				// Security headers
				{ "http-equiv": "X-UA-Compatible", content: "IE=edge" }
			],
			link: [
				// Canonical URL
				{ rel: "canonical", href: "https://latlong.witoxr.app/" },
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
				{ src: "/assets/js/conult.js", defer: true }, // Script principal de votre template
				
				// Structured Data (JSON-LD)
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						"name": "Latlong International",
						"url": "https://latlong.witoxr.app/",
						"logo": "https://latlong.witoxr.app//logo-dark.png",
						"description": "Services de sécurité et de protection en République Démocratique du Congo",
						"foundingDate": "2012",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "325 Boulevard Kanyamuhanga",
							"addressLocality": "Goma",
							"addressRegion": "Nord-Kivu",
							"addressCountry": "CD"
						},
						"contactPoint": {
							"@type": "ContactPoint",
							"telephone": "+243-810-041-500",
							"contactType": "customer service",
							"availableLanguage": ["French", "English"]
						},
						"sameAs": [
							"https://www.linkedin.com/company/latlong-international"
						]
					})
				}
			]
		}
	}
});
