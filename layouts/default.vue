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
  <LayoutBaseArticle class="container">
    <slot/>
  </LayoutBaseArticle>
  <Footer/>
</template>

<style scoped>

</style>