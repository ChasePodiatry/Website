<script setup lang="ts">
import logo from "~/assets/img/logo.svg";
import logo_light from "~/assets/img/logo-light.svg";

const config = useRuntimeConfig();

const logo_attrs = {
  class: "h-10 md:h-14 inline"
}
const link_class = "block py-2 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700";

const menuExpanded = ref<boolean>(false);

const tel = `tel:+44${config.public.phone.replaceAll(" ", "").substr(1)}`
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-900 drop-shadow-lg">
    <nav class="container">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="inline-flex flex-1 md:hidden">
          <button @click="menuExpanded = !menuExpanded" type="button"
                  class="mr-auto items-center p-2 w-10 h-10 justify-left text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-items" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>


        <NuxtLink @click="menuExpanded = false" href="/" title="Chase Podiatry" class="flex flex-1 items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse md:order-first">
          <NuxtPicture class="inline dark:hidden" :img-attrs="logo_attrs" :src="logo"
                       alt="Logo"/>
          <NuxtPicture class="hidden dark:inline" :img-attrs="logo_attrs" :src="logo_light"
                       alt="Logo"/>
        </NuxtLink>

        <div class="flex flex-1 space-x-3 md:space-x-0 rtl:space-x-reverse items-center justify-end md:order-last text-center">
          <a :href="tel" class="bg-chase-purple p-2 m-2 rounded text-white">Call
            <span class="md:hidden">now</span>
            <span class="hidden md:inline">{{config.public.phone}}</span>
          </a>
        </div>

        <div class="items-stretch justify-between w-full md:flex md:w-auto md:h-14" :class="menuExpanded ? 'visible' : 'hidden'" id="navbar-items">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-center">
            <li>
              <NuxtLink href="/" :class="link_class">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="/about/" :class="link_class">
                About</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/treatments/" :class="link_class">
                Treatments</NuxtLink>
            </li>
<!--            <li>-->
<!--              <a href="#" :class="link_class">-->
<!--                Contact</a>-->
<!--            </li>-->
          </ul>
        </div>


      </div>
    </nav>
  </div>
</template>

<style scoped lang="postcss">

#navbar-items {
  a {
    @apply h-full place-content-center;

    &.router-link-active {

    }
  }
}

</style>