<script setup lang="ts">
const {flatUnwrap} = useUnwrap();

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  imgAttrs: {
    type: Object,
    default: {
      class: 'object-cover h-full w-full'
    },
  }
})

// const imgAttrs = JSON.parse(props.imgAttrs);
// console.log(imgAttrs)

</script>

<template>
  <NuxtPicture :src="src" :alt="alt" :img-attrs="imgAttrs" v-bind="$attrs" />
</template>

<style scoped>

</style>