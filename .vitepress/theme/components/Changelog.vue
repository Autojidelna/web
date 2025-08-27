<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { onMounted, ref } from "vue";
import { getChangelogList } from "../data/github-api";

const props = withDefaults(
  defineProps<{
    legacyVersion?: boolean;
  }>(),
  {
    legacyVersion: false
  }
);

const md = new MarkdownIt();

let changelog = ref(null);
onMounted(async () => {
  try {
    const changelogList = await getChangelogList(props.legacyVersion);
    changelog.value = changelogList[0];
  } catch (error) {
    console.error("Error fetching changelog:", error);
  }
});
</script>

<template>
  <header>
    <h2 style="display: flex; justify-content: center">Changelog</h2>
  </header>
  <div v-if="changelog">
    <h3>
      <a href="https://github.com/Autojidelna/autojidelna-legacy/releases/latest">{{ changelog?.title }}</a>
      <Badge type="tip" text="Latest" />
    </h3>
    <div v-html="md.render(changelog.content)" />
  </div>
  <div v-else style="height: 40rem"></div>
</template>
