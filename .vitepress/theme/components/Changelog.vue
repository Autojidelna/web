<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { data as changelogs } from "../data/changelogs.data";

const md = new MarkdownIt();
</script>

<template class="changelog">
	<header>
		<h2 style="display: flex; justify-content: center">Changelog</h2>
	</header>
	<div>
		<h3>
			<a href="https://github.com/Autojidelna/autojidelna/releases/latest">{{ changelogs[0].title }}</a>
			<Badge type="tip" text="Latest" />
		</h3>
	</div>
	<div v-html="md.render(changelogs[0].content)" />
</template>
