export default defineNuxtRouteMiddleware((to) => {
	const cookie = useCookie("i18n_redirected", {
		maxAge: 365 * 24 * 60 * 60,
		path: "/",
		sameSite: "lax"
	});

	const defaultLocale = "fr";

	// Si pas de cookie, initialiser avec la locale par défaut
	if (!cookie.value) {
		cookie.value = defaultLocale;
	}

	// Si on est sur la racine, on laisse Nuxt gérer la redirection
	if (to.path === "/") {
		return;
	}

	// Pour toutes les autres routes, on s'assure que le cookie est défini
	// La locale sera gérée par le composant LanguageSelector
});
