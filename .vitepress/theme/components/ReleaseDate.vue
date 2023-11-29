<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { type AppRelease, data as release } from "../data/release.data";
import { useData } from "vitepress";

const props = defineProps<{ type: keyof AppRelease }>();
const { type } = toRefs(props);

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false);

onMounted(() => {
	show.value = true;
});

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
