<script setup lang="ts">
import type {TocLink} from "@nuxt/content";

defineProps<{
  item: TocLink
}>()
</script>

<template>
  <li>
    <NuxtLink :href="`#${item.id}`">
      {{item.text}}
    </NuxtLink>
    <ul v-if="item.children?.length > 0">
    <TOCItem v-for="(item, _) in item.children" :item="item" />
    </ul>
  </li>
</template>

<style scoped>

</style>