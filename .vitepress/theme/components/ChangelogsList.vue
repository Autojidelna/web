<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { data as changelogs } from "../data/changelogs.data";

const md = new MarkdownIt();

function renderMarkdown(string: string | null | undefined) {
	const body = string ?? "No changelog provided.";
	const flavoredString = body.trim().split("##");

	return flavoredString.map((entry) => md.render(entry));
}
</script>

<template>
	<div>
		<div v-for="(changelog, index) in changelogs" :key="changelog.title">
			<h2 :id="index === 0 ? 'latest' : changelog.title">
				<a :href="'https://github.com/Autojidelna/autojidelna/releases/tag/v' + changelog.title">{{ changelog.title }}</a>
				<Badge v-if="index === 0" type="tip" text="Latest" />
				<a
					class="header-anchor"
					:href="index === 0 ? '#latest' : `#${changelog.title}`"
					:aria-label="`Permalink to &quot;${changelog.title}&quot;`"
				/>
			</h2>
			<div v-html="renderMarkdown(changelog.content)" />
		</div>
	</div>
</template>
