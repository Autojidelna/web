<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { ChangelogEntry, ReleaseWithChangelogs } from "../types/types.ts";

const props = defineProps<{ releaseData: ReleaseWithChangelogs }>();
const latestChangelog: ChangelogEntry = props.releaseData.changelogs[0];
const md = new MarkdownIt();
</script>

<template>
  <header>
    <h2 style="display: flex; justify-content: center">Changelog</h2>
  </header>
  <div v-if="props.releaseData.changelogs">
    <h3>
      <a :href="`${props.releaseData.repo}/releases/latest`">{{ latestChangelog.title }}</a>
      <Badge type="tip" text="Latest" />
    </h3>
    <div v-html="md.render(latestChangelog.content)" />
  </div>
  <div v-else style="height: 40rem"></div>
</template>
