<script setup lang="ts">
import Base from "./base.vue";

const {page} = useContent();

useSeoMeta({
  articleModifiedTime: page.value?.updatedAt,
})

</script>

<template>
  <Base>
    <LayoutBaseArticle class="container mb-5 w-full">
      <slot/>
    </LayoutBaseArticle>
  </Base>
</template>

<style scoped>

</style>