import { defineConfig } from "vitepress";
import { enConfig } from './locales/en'
import { csConfig } from './locales/cs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "src",
	lang:"cs-CZ",
  lastUpdated: true,
	cleanUrls: true,

	locales: {
		root: {
			label: 'Čeština',
			lang: 'cs-CZ',
			link: '/',
			...csConfig,
		},
		en: {
			label: 'English',
			lang: 'en-US',
			link: '/en/',
			...enConfig,
		},
	},
});
