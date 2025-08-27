---
description: Download page that allows users to access and install the latest version of the app.
next: false
prev: false
---

# Download

The latest version of **Autojídelna** was released on **<ReleaseDate  :appRelease="releaseData.release" />**.

::: tip Version 2.0.0
We are working on version **2.0.0** and it will be on the **Google Play Store**.  
You can pre-register for v2 at this link: [Pre-register on Play Store][play-store]
:::

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Unsupported operating system</p>
  <p>
    <strong>Autojídelna</strong> is an <strong>Android app</strong> only.
     Use an <strong>Android device</strong> to download and install the app.
  </p>
</div>

<DownloadButton :releaseData="releaseData" />

<div style="text-align: center;">Requires <b>Android 5.0</b> or higher.</div >

<Changelog :releaseData="releaseData" />

<div style="margin-top: 2em; text-align: center; color: #888888;">
  All changelogs can be found on the <a href="/en/legacy/changelogs">Changelog page</a>.
</div>

[play-store]: https://play.google.com/store/apps/details?id=cz.appelevate.autojidelna

<!-- Setupt script -->
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
