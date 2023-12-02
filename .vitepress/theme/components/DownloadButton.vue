<script setup lang="ts">
import { computed } from "vue";
import { data as release } from "../data/release.data";

const downloadInformation = computed(() => {
	return {
		tagName: release.tag_name ?? "v0.0.0",
		asset: (release.assets ?? []).find((a) => /^autojidelna\.apk$/.test(a.name)),
	};
});
</script>

<template>
	<div class="download-buttons">
		<a class="download-button primary" :download="downloadInformation.asset?.name" :href="downloadInformation.asset?.browser_download_url">
			<span>Stable </span>
			<span>{{ downloadInformation.tagName }}</span>
		</a>
	</div>
</template>

<style>
.download-buttons {
	display: flex;
	gap: 0.75em;
	justify-content: center;
	align-items: center;
	margin: 0.75em auto;
}

.download-button {
	display: inline-block;
	border: 1px solid transparent;
	text-align: center;
	font-weight: 600;
	white-space: nowrap;
	transition: color 0.25s, border-color 0.25s, background-color 0.25s;
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 20px;
	padding: 0 20px;
	line-height: 38px;
	font-size: 14px;
}
.download-button.primary {
	border-color: var(--vp-button-brand-border);
	color: var(--vp-button-brand-text);
	background-color: var(--vp-button-brand-bg);
	text-decoration: none;
	transition: all 150ms ease-in;
}

.download-button.primary:hover {
	border-color: var(--vp-c-brand-1);
	color: var(--vp-c-brand-1);
	background-color: #ffffff00;
	transition: all 150ms ease-in;
}
</style>
