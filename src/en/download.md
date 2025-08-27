---
description: Download page that allows users to access and install the latest version of the app.
next: false
prev: false
---

# Download

The latest version of **Autojídelna** was released on **<ReleaseDate :appRelease="releaseData.release" />**.

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Unsupported operating system</p>
  <p>
    <strong>Autojídelna</strong> is an <strong>Android app</strong> only.
     Use an <strong>Android device</strong> to download and install the app.
  </p>
</div>

<DownloadButton :releaseData="releaseData" />

<div style="text-align: center;">Requires <b>Android 7.0</b> or higher.</div >

<Changelog :releaseData="releaseData" />

<div style="margin-top: 2em; text-align: center; color: #888888;">
  All changelogs can be found on the <a href="/en/changelogs">Changelog page</a>.
</div>

<!-- Setupt script -->

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
