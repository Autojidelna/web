<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { data as release } from '../data/release.data'

const downloadInformation = computed(() => ({
  stable: {
    tagName: release.stable.tag_name ?? 'v0.0.0',
    asset: (release.stable.assets ?? [])
      .find(a => /^autojidelna\.apk$/.test(a.name)),
  },
}))

const isAndroid = ref(true)

onMounted(() => {
  isAndroid.value = !!navigator.userAgent.match(/android/i)
})
</script>

<template>
  <div>
    <a
      :download="downloadInformation.stable.asset?.name"
      :href="downloadInformation.stable.asset?.browser_download_url"
    >
      <IconDownload />
      <span>Stable </span>
      <span>{{ downloadInformation.stable.tagName }}</span>
    </a>
  </div>
</template>