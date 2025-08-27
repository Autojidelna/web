<script setup lang="ts">
import { useData } from "vitepress";
import { AppRelease } from "../types/types.ts";

const props = defineProps<{ appRelease: AppRelease }>();
const locale = useData().lang.value.substring(0, 2);
const dateFormatter = new Intl.DateTimeFormat(locale, {
  dateStyle: "long"
});
</script>

<template>
  <time>
    {{ dateFormatter.format(new Date(props.appRelease.published_at!)) }}
  </time>
</template>
