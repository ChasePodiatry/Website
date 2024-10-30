<script setup lang="ts">
import Default from "~/layouts/default.vue";
import TOC from "~/components/nav/TOC.vue";

const {page, toc} = useContent()

</script>

<template>
  <default>
    <LayoutPageTitle />
    <LayoutPageBody>
      <slot/>
    </LayoutPageBody>
    <footer>
      Last updated {{formatDate(page.updatedAt)}}
    </footer>
  </default>
</template>

<style scoped>

</style>