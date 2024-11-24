<script setup lang="ts">
const {toc} = useContent();
</script>

<template>
  <main>
    <aside class="lg:float-right bg-gray-100 dark:bg-gray-900 dark:drop-shadow-lg p-5 lg:ml-5 mb-5" v-if="toc?.links.length > 0">
      <strong class="text-2xl">Contents</strong>
      <NavTOC />
    </aside>
    <slot />
  </main>
</template>

<style scoped>

</style>