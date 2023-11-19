import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }]],
	srcDir: "src",
	title: "Autojidelna",
	description: "Aplikace pro objednávání ze systému Icanteen",
});
