<script setup lang="ts">
export interface Props {
  phone?: string
}

const props = withDefaults(defineProps<Props>(), {
  phone: () => useRuntimeConfig().public.phone,
});

const tel = `tel:+44${props.phone.replaceAll(" ", "").substr(1)}`
</script>

<template>
  <NuxtLink :href="tel" class="text-nowrap">
    <slot>
      {{ props.phone }}
    </slot>
  </NuxtLink>
</template>

<style scoped>

</style>