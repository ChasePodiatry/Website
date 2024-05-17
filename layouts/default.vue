<script setup lang="ts">
import moment from "moment";

const {page} = useContent();

function timestampFormat(timestamp: number, timezoneOffset: number) {
  const utc = moment.unix(timestamp + timezoneOffset).utc();
  return utc.format()
}

</script>

<template>
  <header>
    <NavBar/>
  </header>
  <article class="container bg-slate-50 dark:bg-transparent py-10 drop-shadow dark:drop-shadow-none">
    <header>
      <h1 class="text-center">
        {{page.title}}
      </h1>
      <slot />
    </header>
    <footer>
      Last edited {{page.lastModified}}
    </footer>
  </article>
  <Footer/>
</template>

<style scoped>

</style>