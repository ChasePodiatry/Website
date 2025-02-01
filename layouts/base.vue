<script setup lang="ts">
const {page} = useContent();

useSeoMeta({
  articleModifiedTime: page?.value?.updatedAt,
})

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header>
      <NavBar/>
    </header>
    <div class="grow flex flex-col">
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>