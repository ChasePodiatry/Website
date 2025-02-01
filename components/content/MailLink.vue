<script setup lang="ts">
export interface Props {
  email?: string
}

const props = withDefaults(defineProps<Props>(), {
  email: () => useRuntimeConfig().public.email,
});

const href = `mailto:${props.email}`
</script>

<template>
  <NuxtLink :href="href" class="text-nowrap">
    <slot>
      {{ props.email }}
    </slot>
  </NuxtLink>
</template>

<style scoped>

</style>