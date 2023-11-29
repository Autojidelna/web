<script setup lang="ts">
import { data as release } from "../data/release.data";
import { useData } from "vitepress";

const locale = useData().lang.value.substring(0, 2);
const dateFormatter = new Intl.DateTimeFormat(locale, {
	dateStyle: "long",
});
</script>

<template>
	<time>
		{{ dateFormatter.format(new Date(release.stable.published_at!)) }}
	</time>
</template>
