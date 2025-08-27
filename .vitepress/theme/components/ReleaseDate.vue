<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getLatestRelease } from "../data/github-api";
import { useData } from "vitepress";

const props = withDefaults(
  defineProps<{
    legacyVersion?: boolean;
  }>(),
  {
    legacyVersion: false
  }
);

const locale = useData().lang.value.substring(0, 2);
const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: "long"
});

const release = ref(null);
onMounted(async () => {
  try {
    release.value = await getLatestRelease(props.legacyVersion);
  } catch (error) {
    console.error("Error fetching latest release date:", error);
  }
});
</script>

<template>
  <time v-if="release">
    {{ dateFormatter.format(new Date(release.published_at!)) }}
  </time>
</template>
