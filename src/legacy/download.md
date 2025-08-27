---
description: Stránka ke stažení, která uživatelům umožňuje přístup k nejnovější verzi aplikace a její instalaci.
next: false
prev: false
---

# Stáhnout aplikaci

Nejnovější verze **Autojídelny** byla vydána **<ReleaseDate :appRelease="releaseData.release" />**.

::: tip Verze 2.0.0
Pracujeme na verzi **2.0.0**, která bude dostupná na **Google Play Store**.  
Můžete se předregistrovat na tuto verzi zde: [Předregistrace na Play Store][play-store]
:::

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Nepodporovaný operační systém</p>
  <p>
    <strong>Autojídelna</strong> je aplikace pouze pro <strong>Android</strong>.
     Ke stažení a instalaci aplikace použijte <strong>Android zařízení</strong>.
  </p>
</div>

<DownloadButton :releaseData="releaseData" />

<div style="text-align: center;">Vyžaduje <b>Android 5.0</b> nebo vyšší.</div>

<Changelog :releaseData="releaseData" />

<div style="margin-top: 2em; text-align: center; color: #888888;">
  Všechny changelogy naleznete na <a href="/legacy/changelogs">Changelog stránce</a>.
</div>

[play-store]: https://play.google.com/store/apps/details?id=cz.appelevate.autojidelna

<!-- Setup script-->
<script setup lang="ts">
  import ReleaseDate from "@theme/components/ReleaseDate.vue";
  import DownloadButton from "@theme/components/DownloadButton.vue";
  import Changelog from "@theme/components/Changelog.vue";
  import { computed, onMounted, ref } from 'vue';
  import { data as loaderData } from '@theme/data/releaseWithChangelogs.data.ts';
  const releaseData = loaderData.legacy;

  const isAndroid = ref(true)
  onMounted(() => {
    isAndroid.value = !!navigator.userAgent.match(/android/i)
  })
</script>
