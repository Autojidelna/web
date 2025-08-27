---
description: Changelogy vydaných verzí Autojídelny.
next: false
prev: false
---

# Changelogy

Changelogy všech stabilních verzí **Autojídelny** jsou také dostupné [na GitHub][changelog].

<ChangelogsList :releaseData="releaseData" />

<!-- Setup script -->

<script setup lang="ts">
  import ChangelogsList from "@theme/components/ChangelogsList.vue";
  import { data as loaderData } from '@theme/data/releaseWithChangelogs.data.ts';
  const releaseData = loaderData.latest;
</script>

<!-- Links -->

[changelog]: https://github.com/Autojidelna/autojidelna/blob/main/CHANGELOG.md
