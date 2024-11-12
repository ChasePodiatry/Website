<script setup lang="ts">
const {toc, page} = useContent();

const depth = page.value.tocDepth ?? 3;
</script>

<template>
  <ul>
    <NavTOCItem v-for="(item, _) in toc.links" :item="item" :maxDepth="depth" />
  </ul>
</template>

<style scoped>

</style>