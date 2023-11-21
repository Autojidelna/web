import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]],
	srcDir: "src",
	title: "Autojídelna",
	description: "The Icanteen ordering app",
  lastUpdated: true,
  cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: { light: "/logo_black.svg", dark: "/logo_white.svg" },
		siteTitle: 'Autojídelna',
		nav: [
			{
        text: 'Get app',
        items: [
          { text: 'Download', link: '/download' },
          { text: 'Changelogs', link: '/changelogs' }
        ],
			},
			{ text: "Guides", link: "/guides/getting-started" },
		],

		socialLinks: [
      { icon: 'github', link: 'https://github.com/Autojidelna/autojidelna' }
		],
		
		sidebar: [
			{
				items: [
					{ text: "Download", link: "/download" },
					{ text: "Changelogs", link: "/changelogs" },
				],
			},
			{
				text: "Guides",
				items: [
					{ text: "Getting Started", link: "/guides/getting-started" },
				]
			},
			/*{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				]
			}*/
		],
	},
});
