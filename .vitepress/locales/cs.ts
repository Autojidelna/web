import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const csConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: "Autojídelna",
	description: "The Icanteen ordering app",
	lang: "cs-CZ",
	head: [
		["link", { rel: "icon", href: "/logo_black.svg", type: "image/svg+xml" }],
		["meta", { property: "og:site_name", content: "Autojídelna" }],
		["meta", { property: "og:locale", content: "cs-CZ" }],
	],
	themeConfig: {
		logo: { light: "/logo_black.svg", dark: "/logo_white.svg" },
		siteTitle: "Autojídelna",
		socialLinks: [{ icon: "github", link: "https://github.com/Autojidelna/autojidelna" }],

		nav: [
			{
				text: "Stáhnout aplikaci",
				items: [
					{ text: "Stáhnout", link: "/cs/download/index.md" },
					{ text: "Changelogy", link: "/cs/changelogs/index.md" },
				],
			},
			//{ text: "Návody", link: "/cs/guides/getting-started/index.md", },
		],
		sidebar: [
			{
				items: [
					{ text: "Stáhnout aplikaci", link: "/cs/download/index.md" },
					{ text: "Changelogy", link: "/cs/changelogs/index.md" },
				],
			},
			/*{
				text: "Návody",
				items: [
					{ text: "Getting Started", link: "/cs/guides/getting-started/index.md" },
				]
			},*/
		],
	},
};
