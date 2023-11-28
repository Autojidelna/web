<script setup lang="ts">
import { computed, onMounted, ref, toRefs } from 'vue'
import moment from 'moment'
import { type AppRelease, data as release } from '../data/release.data'

const props = defineProps<{ type: keyof AppRelease }>()
const { type } = toRefs(props)

const momentInfo = computed(() => ({
  exact: moment(release[type.value].published_at).format('DD/MM/YYYY [-] HH:mm'),
}))

// Mimic the <ClientOnly /> behavior to show custom text while rendering.
const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<template>
  <time>
    {{ momentInfo.exact }}
  </time>
</template>