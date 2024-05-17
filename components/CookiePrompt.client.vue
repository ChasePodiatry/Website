<script setup lang="ts">


const props = defineProps<{
  id: string
}>();

const accepted = ref<boolean>((window.localStorage.getItem(`cookie-${props.id}`) ?? false) as boolean);

function accept() {
  accepted.value = true;
  window.localStorage.setItem(`cookie-${props.id}`, String(true));
}

</script>

<template>
  <slot name="prompt" :accept="accept" v-if="!accepted"/>
  <slot name="accepted" v-if="accepted"/>
</template>

<style scoped>

</style>