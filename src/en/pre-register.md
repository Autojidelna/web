---
description: Pre-register page that allows users to access the upcoming v2.0.0 release of the app.
next: false
prev: false
---

# Pre-register

We’re thrilled to announce that the next major version of **Autojídelna** is almost here! 🎉  
Pre-register now to be among the first to experience the new app, packed with exciting improvements, new features, and a smoother experience. Your feedback will help us make v2.0.0 the best it can be!

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Unsupported operating system</p>
  <p>
    <strong>Autojídelna</strong> is an <strong>Android app</strong> only.
     Use an <strong>Android device</strong> to download and install the app.
  </p>
</div>

<DownloadButton :releaseData="releaseData" />

<div style="text-align: center;">Requires <b>Android 7.0</b> or higher.</div >

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
