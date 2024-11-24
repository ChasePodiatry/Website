<script setup lang="ts">
import Default from "~/layouts/default.vue";

definePageMeta({
  title: "Page not found",
  layout: false,
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <Default>
      <div class="flex-grow text-center">
        <NuxtPicture class="inline-block" src="404.avif" alt="404" />
        <h1>Page not found :(</h1>

        <p>We're sorry, the page you are looking for could not be found.</p>

        <p>
          If you believed you followed a valid link to get here, please
          <NuxtLink href="/about/#contact-us">contact us</NuxtLink>
          so we can fix it.
        </p>
      </div>
    </Default>
  </div>
</template>

<style scoped>

</style>