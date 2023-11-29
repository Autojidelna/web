---
layout: false
---

<script setup lang="ts">
import { onMounted } from 'vue';
import { useData } from 'vitepress';

const locale = useData().lang.value.substring(0, 2);

onMounted(() => {
  window.location.pathname = "/" + locale + "/guides/getting-started/";
});
</script>
