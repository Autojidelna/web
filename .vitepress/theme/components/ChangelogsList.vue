<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { onMounted, ref } from "vue";
import { getChangelogList } from "../data/github-api";

const md = new MarkdownIt();

let changelogList = ref(null);

onMounted(async () => {
	try {
		changelogList.value = await getChangelogList();
	} catch (error) {
		console.error("Error fetching changelog list:", error);
	}
});
</script>

<template>
	<div v-for="(changelog, index) in changelogList" :key="changelog.title">
		<h2 :id="index === 0 ? 'latest' : changelog.title">
			<a :href="'https://github.com/Autojidelna/autojidelna/releases/tag/v' + changelog.title">{{ changelog.title }}</a>
			<Badge v-if="index === 0" type="tip" text="Latest" />
			<a class="header-anchor" :href="index === 0 ? '#latest' : `#${changelog.title}`" :aria-label="`Permalink to &quot;${changelog.title}&quot;`" />
		</h2>
		<div v-html="md.render(changelog.content)" />
	</div>
</template>
