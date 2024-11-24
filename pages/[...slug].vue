<script setup lang="ts">

import Base from "~/layouts/base.vue";

definePageMeta({
  layout: false,
})

</script>

<template>
  <ContentDoc>
    <template v-slot="{ doc }">
        <LayoutPageLayout>
          <ContentRenderer :value="doc" />
        </LayoutPageLayout>
    </template>
    <template #not-found>
      <Base>
        <NotFound />
      </Base>
    </template>
  </ContentDoc>
</template>

<style scoped>

</style>