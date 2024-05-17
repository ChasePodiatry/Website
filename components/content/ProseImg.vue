<script setup lang="ts">
import {pictureProps} from "#image/components/nuxt-picture";

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
    type: String,
    default: '',
  }
})

// const imgAttrs = JSON.parse(props.imgAttrs);
// console.log(imgAttrs)

</script>

<template>
  <NuxtPicture :src="src" :alt="alt" v-bind="$attrs" :img-attrs="{class: 'object-cover h-full w-full'}" />
</template>

<style scoped>

</style>