<script setup lang="ts">
import type {TocLink} from "@nuxt/content";

const props = defineProps<{
  item: TocLink
  maxDepth: number,
}>();
</script>

<template>
  <li v-if="item.depth <= maxDepth">
    <NuxtLink :href="`#${item.id}`">
      {{item.text}}
    </NuxtLink>
    <ul v-if="item.children?.length > 0">
    <TOCItem v-for="(item, _) in item.children" v-bind="props" :item="item" />
    </ul>
  </li>
</template>

<style scoped>

</style>