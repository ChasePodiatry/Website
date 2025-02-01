<script setup lang="ts">
const {page} = useContent();
</script>

<template>
  <header v-if="page">
    <h1 class="text-center">
      {{page.title}}
    </h1>
  </header>
</template>

<style scoped>

</style>