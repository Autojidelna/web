import { imagetools } from "vite-imagetools";
import { enConfig } from "./locales/en";
import { csConfig } from "./locales/cs";
// https://vitepress.dev/reference/site-config
export default {
	srcDir: "src",
	lang: "cs-CZ",
	lastUpdated: true,
	cleanUrls: true,

	locales: {
		root: {
			label: "Čeština",
			lang: "cs-CZ",
			link: "/cs/",
			...csConfig,
		},
		en: {
			label: "English",
			lang: "en-US",
			link: "/en/",
			...enConfig,
		},
	},

	plugins: [imagetools()],
};
