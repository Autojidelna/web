---
title: Download
description: Download page that allows users to access and install the latest version of the app.
lastUpdated: false
editLink: false
next: false
prev: false
---

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import ReleaseDate from "@theme/components/ReleaseDate.vue"
  import DownloadButton from "@theme/components/DownloadButton.vue"
  import Changelog from "@theme/components/Changelog.vue"

  const isAndroid = ref(true)
  onMounted(() => {
    isAndroid.value = !!navigator.userAgent.match(/android/i)
  })
</script>

# Download

The latest version of **Autojídelna** was released on **<ReleaseDate />**.

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Unsupported operating system</p>
  <p>
    <strong>Autojídelna</strong> is an <strong>Android app</strong> only.
     Use an <strong>Android device</strong> to download and install the app.
  </p>
</div>

<DownloadButton />

<div style="text-align: center;">Requires <b>Android 6.0</b> or higher.</div >

<Changelog />

<div style="margin-top: 2em; text-align: center; color: #888888;">
  All changelogs can be found on the <a href="/en/changelogs/">Changelog page</a>.
</div>
