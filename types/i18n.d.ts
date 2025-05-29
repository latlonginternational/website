import { I18n } from "i18n";

declare module "#app" {
	interface NuxtApp {
		$i18n: I18n;
	}
}

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$i18n: I18n;
	}
}
