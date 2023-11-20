<script setup lang="ts">
import { useData } from "vitepress";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
	<div v-if="frontmatter.home">
		<Content />
	</div>
	<div v-else>
		<a href="/">Home</a>
		<Content />
	</div>
</template>
