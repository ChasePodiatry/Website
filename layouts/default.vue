<script setup lang="ts">
import TOC from "~/components/nav/TOC.vue";

const {page, toc} = useContent();

console.log(page);

useSeoMeta({
  // @ts-expect-error
  articleModifiedTime: page.updatedAt,
})

</script>

<template>
  <header>
    <NavBar/>
  </header>
  <article class="container bg-slate-50 dark:bg-transparent py-10 drop-shadow dark:drop-shadow-none gap-10 grid">
    <header>
      <h1 class="text-center">
        {{page.title}}
      </h1>
    </header>
    <main>
      <aside class="lg:float-right bg-gray-100 dark:bg-gray-900 dark:drop-shadow-lg p-5 ml-5 mb-5" v-if="toc.links.length > 0">
        <strong class="text-2xl">Contents</strong>
        <TOC />
      </aside>
      <slot />
    </main>
    <footer>
      Last updated {{formatDate(page.updatedAt)}}
    </footer>
  </article>
  <Footer/>
</template>

<style scoped>

</style>