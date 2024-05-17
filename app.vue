<script lang="ts" setup>

useHead({
  titleTemplate(title) {
      return title ? `${title} | Chase Podiatry` : 'Chase Podiatry'
  },
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
