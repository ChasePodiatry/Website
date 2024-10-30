<script setup lang="ts">
const imgAttrs = {
  class: 'object-contain h-full',
}
</script>

<template>
  <div class="h-32 md:h-52 w-full flex flex-row gap-10 justify-around">
    <a href="https://rcpod.org.uk/" title="Royal College of Podiatry" target="_blank" rel="external">
      <NuxtPicture src="rcpod-2024.png" :img-attrs="imgAttrs" alt="Royal College of Podiatry Registered Member 2024"/>
    </a>
    <a href="https://www.hcpc-uk.org/" title="Health and Care Professions Council">
      <NuxtPicture src="hcpc-logo.png" :img-attrs="imgAttrs" alt="HCPC Registered" />
    </a>
  </div>
</template>

<style scoped lang="postcss">
a, picture {
  @apply h-full inline-block;
}
</style>