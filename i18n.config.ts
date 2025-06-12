export default defineI18nConfig(() => ({
	legacy: false,
	locale: "fr",
	fallbackLocale: "fr",
	sync: true,
	silentTranslationWarn: true,
	silentFallbackWarn: true,
	messages: {
		en: {
			// Les messages seront chargés depuis le fichier en.json
		},
		fr: {
			// Les messages seront chargés depuis le fichier fr.json
		}
	}
}));
