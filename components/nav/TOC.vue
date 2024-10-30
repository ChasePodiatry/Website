<script setup lang="ts">
const {toc} = useContent();
</script>

<template>
  <ul>
    <NavTOCItem v-for="(item, _) in toc.links" :item="item" />
  </ul>
</template>

<style scoped>

</style>