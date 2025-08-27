<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLatestRelease } from "../data/release.data.ts";

const props = withDefaults(
  defineProps<{
    legacyVersion?: boolean;
  }>(),
  {
    legacyVersion: false
  }
);

const release = ref(null);
const asset = ref(null);

onMounted(async () => {
  try {
    release.value = await getLatestRelease(props.legacyVersion);
    asset.value = (release.value.assets || []).find(a => a.name === "autojidelna.apk");
  } catch (error) {
    console.error("Error fetching latest release data:", error);
  }
});
</script>

<template>
  <div class="download-buttons">
    <!---->
    <a v-if="!legacyVersion" class="download-button primary" href="https://play.google.com/store/apps/details?id=cz.appelevate.autojidelna">
      <span>Google Play</span>
    </a>
    <!---->
    <a v-if="release && asset" class="download-button primary" :download="asset?.name || 'autojidelna.apk'" :href="asset?.browser_download_url">
      <span>Android APK v </span>
      <span>{{ release?.tag_name }}</span>
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
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
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

.dissabled {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: #ffffff00;
  opacity: 0.6;
  pointer-events: none;
  cursor: not-allowed;
  text-decoration: none;
}

.download-button.primary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background-color: #ffffff00;
  transition: all 150ms ease-in;
}
</style>
