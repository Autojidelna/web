<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { ReleaseWithChangelogs } from "../types/types.ts";

const props = defineProps<{ releaseData: ReleaseWithChangelogs }>();
const md = new MarkdownIt();
</script>

<template>
  <div v-for="(changelog, index) in props.releaseData.changelogs" :key="changelog.title">
    <h2 :id="index === 0 ? 'latest' : changelog.title.replace(/\+/g, '_')">
      <a :href="`${props.releaseData.repo}/releases/tag/v${changelog.title}`">{{ changelog.title }}</a>
      <Badge v-if="index === 0" type="tip" text="Latest" />
      <a class="header-anchor" :href="index === 0 ? '#latest' : `#${changelog.title}`" :aria-label="`Permalink to &quot;${changelog.title}&quot;`" />
    </h2>
    <div v-html="md.render(changelog.content)" />
  </div>
</template>
