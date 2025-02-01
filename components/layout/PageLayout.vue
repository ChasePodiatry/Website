<script setup lang="ts">
const {page} = useContent();
</script>

<template>
  <LayoutPageTitle />
  <LayoutPageBody class="w-full overflow-auto">
    <slot />
  </LayoutPageBody>
  <footer>
    <template v-if="page?.updatedAt">Last updated {{formatDate(page.updatedAt)}}</template>
  </footer>
</template>

<style scoped>

</style>