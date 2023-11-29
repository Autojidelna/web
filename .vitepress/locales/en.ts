import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
	title: "Autojídelna",
	description: "The Icanteen ordering app",
	lang: "en-US",
	head: [
		["link", { rel: "icon", href: "/logo_black.svg", type: "image/svg+xml" }],
		["meta", { property: "og:site_name", content: "Autojídelna" }],
		["meta", { property: "og:locale", content: "en-US" }],
	],
	themeConfig: {
		logo: { light: "/logo_black.svg", dark: "/logo_white.svg" },
		siteTitle: "Autojídelna",
		socialLinks: [{ icon: "github", link: "https://github.com/Autojidelna/autojidelna" }],

		nav: [
			{
				text: "Get app",
				items: [
					{ text: "Download", link: "/en/download/index.md" },
					{ text: "Changelogs", link: "/en/changelogs/index.md" },
				],
			},
			{ text: "Guides", link: "/en/guides/getting-started/index.md" },
		],
		sidebar: [
			{
				items: [
					{ text: "Download", link: "/en/download/index.md" },
					{ text: "Changelogs", link: "/en/changelogs/index.md" },
				],
			},
			{
				text: "Guides",
				items: [{ text: "Getting Started", link: "/en/guides/getting-started/index.md" }],
			},
		],
	},
};
