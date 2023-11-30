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
					{ text: "Stáhnout aplikaci", link: "/cs/download/index.md" },
					{ text: "Changelogy", link: "/cs/changelogs/index.md" },
				],
			},
			{ text: "Návody", link: "/cs/guides/getting-started/index.md" },
		],
		sidebar: [
			{
				items: [
					{ text: "Stáhnout aplikaci", link: "/cs/download/index.md" },
					{ text: "Changelogy", link: "/cs/changelogs/index.md" },
				],
			},
			{
				text: "Návody",
				items: [{ text: "Začínáme", link: "/cs/guides/getting-started/index.md" }],
			},
		],
		footer: {
			message: "<a href='https://www.gnu.org/licenses/gpl-3.0.en.html'>Vydáno pod licencí GPL-3.0</a>",
			copyright: `Copyright © 2023 Matěj Verhaegen, Tomáš Protiva`,
		},
	},
};
