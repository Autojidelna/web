import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }]],
	srcDir: "src",
	title: "Autojidelna",
	description: "Aplikace pro objednávání ze systému Icanteen",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/logo.svg",
		siteTitle: 'My Custom Title',
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		socialLinks: [
      { icon: 'github', link: 'https://github.com/mattheroit/website' }
		],
		
		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],
	},
});
