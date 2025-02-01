<script setup lang="ts">
export interface Props {
  address?: string[]
  inline?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  address: () => useRuntimeConfig().public.address,
  inline: true,
});

</script>

<template>
  <span v-if="inline">
    {{address.join(', ')}}
  </span>
  <div v-else>
    <template v-for="(line, index) in address">
      {{line}}<br v-if="index != address.length">/>
    </template>
  </div>
</template>

<style scoped>

</style>