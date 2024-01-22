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
		socialLinks: [
			{ icon: "github", link: "https://github.com/Autojidelna/autojidelna" },
			{
				icon: {
					svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
				},
				link: "mailto:autojidelna@tomprotiva.com",
			},
		],

		nav: [
			{ text: "Get app", link: "/en/download/index.md" },
			{ text: "Gallery", link: "/en/gallery/index.md" },
			{ text: "Guides", link: "/en/guides/getting-started/index.md" },
		],
		sidebar: [
			{
				items: [
					{ text: "Download", link: "/en/download/index.md" },
					{ text: "Changelogs", link: "/en/changelogs/index.md" },
					{ text: "Gallery", link: "/en/gallery/index.md" },
				],
			},
			{
				text: "Guides",
				items: [{ text: "Getting Started", link: "/en/guides/getting-started/index.md" }],
			},
		],
		footer: {
			message: "<a href='https://www.gnu.org/licenses/gpl-3.0.en.html'>Released under the GPL-3.0 license</a>",
			copyright: `Copyright © 2023 - ${new Date().getFullYear()} Matěj Verhaegen, Tomáš Protiva`,
		},
	},
};
