---
description: Changelogs of the released versions of Autojídelna.
next: false
prev: false
---

# Changelogs

Changelogs for all stable versions of **Autojídelna** are also available on [GitHub][changelog]

::: warning Attention
Changelogs are only available in Czech. We apologize for any inconvenience to non-Czech speakers.
:::

<ChangelogsList :releaseData="releaseData" />

<!-- Setup script -->

<script setup lang="ts">
  import ChangelogsList from "@theme/components/ChangelogsList.vue";
  import { data as loaderData } from '@theme/data/releaseWithChangelogs.data.ts';
  const releaseData = loaderData.legacy;
</script>

<!-- Links -->

[changelog]: https://github.com/Autojidelna/autojidelna-legacy/blob/main/CHANGELOG.md
