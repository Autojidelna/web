---
title: Stáhnout aplikaci
description: Stránka ke stažení, která uživatelům umožňuje přístup k nejnovější verzi aplikace a její instalaci.
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

# Stáhnout aplikaci

Nejnovější verze **Autojídelny** byla vydána **<ReleaseDate />**.

<div v-if="!isAndroid" class="custom-block danger">
 <p class="custom-block-title">Nepodporovaný operační systém</p>
  <p>
    <strong>Autojídelna</strong> je aplikace pouze pro <strong>Android</strong>.
     Ke stažení a instalaci aplikace použijte <strong>Android zařízení</strong>.
  </p>
</div>

<DownloadButton />

<div style="text-align: center;">Vyžaduje <b>Android 6.0</b> nebo vyšší.</div>

<Changelog />

<div style="margin-top: 2em; text-align: center; color: #888888;">
  Všechny changelogy naleznete na <a href="/cs/changelogs/">Changelog stránce</a>.
</div>
