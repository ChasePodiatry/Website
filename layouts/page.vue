<script setup lang="ts">
import Default from "~/layouts/default.vue";

const {page} = useContent();

</script>

<template>
  <default>
    <LayoutPageTitle />
    <LayoutPageBody class="w-full overflow-auto">
      <slot/>
    </LayoutPageBody>
    <footer>
      Last updated {{formatDate(page.updatedAt)}}
    </footer>
  </default>
</template>

<style scoped>

</style>