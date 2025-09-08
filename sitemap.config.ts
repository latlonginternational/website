import { defineSitemapConfig } from 'nuxt-simple-sitemap'

export default defineSitemapConfig({
	siteUrl: 'https://www.latlonginternational.com',
	trailingSlash: false,
	defaults: {
		changefreq: 'weekly',
		priority: 0.7
	},
	exclude: [
		'/api/**',
		'/_nuxt/**',
		'/server/**'
	]
}) 