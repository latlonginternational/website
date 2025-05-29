import { defineNuxtPlugin } from "#app";
import fr from "../i18n/locales/fr.json";
import en from "../i18n/locales/en.json";

interface I18nInstance {
	locale: string;
	messages: Record<string, Record<string, any>>;
	__(key: string, params?: Record<string, any>): string;
	setLocale(locale: string): void;
	getLocale(): string;
	setMessages(messages: Record<string, Record<string, any>>): void;
}

const createI18n = (): I18nInstance => {
	const state = {
		locale: "fr",
		messages: {} as Record<string, Record<string, any>>
	};

	return {
		get locale() {
			return state.locale;
		},
		get messages() {
			return state.messages;
		},
		setLocale(locale: string) {
			state.locale = locale;
		},
		getLocale() {
			return state.locale;
		},
		setMessages(messages: Record<string, Record<string, any>>) {
			state.messages = messages;
		},
		__(key: string, params?: Record<string, any>): string {
			const keys = key.split(".");
			let value: any = state.messages[state.locale];

			for (const k of keys) {
				if (value && typeof value === "object") {
					value = value[k];
				} else {
					return key;
				}
			}

			if (typeof value !== "string") {
				return key;
			}

			if (params) {
				return value.replace(/%s/g, () => String(params.year || ""));
			}

			return value;
		}
	};
};

export default defineNuxtPlugin((nuxtApp) => {
	const i18n = createI18n();
	console.log("Messages FR:", fr);
	console.log("Messages EN:", en);
	i18n.setMessages({ fr, en });
	console.log("I18n instance:", i18n);
	console.log("Current locale:", i18n.getLocale());
	console.log("Available messages:", i18n.messages);
	nuxtApp.provide("i18n", i18n);
});
