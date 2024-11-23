<script setup lang="ts">
const {page} = useContent();

useSeoMeta({
  articleModifiedTime: page.value?.updatedAt,
})

</script>

<template>
  <header>
    <NavBar/>
  </header>
  <slot />
  <Footer/>
</template>

<style scoped>

</style>