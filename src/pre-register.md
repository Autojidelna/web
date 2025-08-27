---
description: Stránka ke předregistraci, která uživatelům umožňuje přístup k budoucí v2.0.0 verzi aplikace.
next: false
prev: false
---

# Předběžná registrace

Těší nás, že už brzy přivítáme novou verzi **Autojídelny**! 🚀  
Předregistrujte se a buďte mezi prvními, kdo vyzkouší modernější aplikaci s novými funkcemi a vylepšeným uživatelským zážitkem. Vaše zkušenosti a zpětná vazba nám pomohou udělat verzi v2.0.0 opravdu výjimečnou!

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Nepodporovaný operační systém</p>
  <p>
    <strong>Autojídelna</strong> je aplikace pouze pro <strong>Android</strong>.
     Ke stažení a instalaci aplikace použijte <strong>Android zařízení</strong>.
  </p>
</div>

<DownloadButton :releaseData="releaseData" />

<div style="text-align: center;">Vyžaduje <b>Android 7.0</b> nebo vyšší.</div>

<!-- Setup script-->

<script setup lang="ts">
  import ReleaseDate from "@theme/components/ReleaseDate.vue";
  import DownloadButton from "@theme/components/DownloadButton.vue";
  import Changelog from "@theme/components/Changelog.vue";
  import { computed, onMounted, ref } from 'vue';
  import { data as loaderData } from '@theme/data/releaseWithChangelogs.data.ts';
  const releaseData = loaderData.latest;

  const isAndroid = ref(true)
  onMounted(() => {
    isAndroid.value = !!navigator.userAgent.match(/android/i)
  })
</script>
