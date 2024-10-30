<script setup lang="ts">
import TOCItem from "~/components/nav/TOCItem.vue";

const {toc} = useContent();
</script>

<template>
  <ul>
    <TOCItem v-for="(item, _) in toc.links" :item="item" />
  </ul>
</template>

<style scoped>

</style>