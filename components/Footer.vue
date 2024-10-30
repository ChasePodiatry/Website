<script setup lang="ts">
const config = useRuntimeConfig();

const phone = `tel:+44${config.public.phone.replaceAll(" ", "").substr(1)}`;

</script>

<template>
  <footer class="dark:bg-slate-500 dark:shadow-slate-950 pt-5 mt-10">
    <div class="container flex flex-wrap flex-col md:flex-row content-between justify-between mx-auto p-4 gap-10">
      <div class="flex-1 flex flex-wrap">
        <div class="flex-1">
          <strong class="text-2xl">contact</strong>
          <ul>
            <li>
              <TelLink>call us</TelLink>
            </li>
            <li>
              <a :href="`mailto:${config.public.email}`">email us</a>
            </li>
            <li>
              <NuxtLink href="/about/#contact-us">locations</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <strong class="text-2xl">services</strong>
          <ul>
            <li>
              <NuxtLink to="/treatments/">treatments</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about/treatment-plans/">prices</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <strong class="text-2xl">about</strong>
          <ul>
            <li>
              <NuxtLink to="/privacy/">privacy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/security/">security</NuxtLink>
            </li>
          </ul>
        </div>
        <FooterRegistrations class="hidden md:flex"/>
      </div>
      <div class="w-full md:w-[300px] lg:w-[400px] h-[400px]">
        <h4>follow</h4>
        <CookiePrompt id="facebook">
          <template #prompt="promptProps">
            <div id="fb-prompt"
                 class="w-full h-[350px] from-chase-blue to-chase-blue-900 text-white drop-shadow dar:drop-shadow-none">
              <div class="w-full h-full flex flex-col">
                <div class="h-1/3 relative">
                  <NuxtPicture class="h-full w-full absolute -z-10" src="waiting-room.png"
                               alt="Chase Podiatry's waiting room"
                               :img-attrs="{class: 'h-full w-full object-cover object-center'}"/>
                  <div
                      class="h-full flex flex-row gap-5 p-5 md:p-7 justify-around items-center from-black to-transparent bg-gradient-to-b">
                    <Icon name="uil:facebook" color="#4267B4" class="text-6xl drop-shadow"/>
                    <div class="flex-1 h-full flex flex-col justify-around">
                      <div class="text-xl">Chase Podiatry</div>
                      <div class="text-sm">Facebook page</div>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-around p-5">
                  <span>
                    Chase Podiatry does not use cookies on it's website, however loading our Facebook page will store
                    3-rd party Facebook cookies.
                  </span>
                  <button @click="promptProps.accept"
                          class="bg-green-400 border border-green-500 w-fit mx-auto py-2 px-5 rounded">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template #accepted>
            <div class="text-center md:text-left">
              <div class="fb-page" data-href="https://www.facebook.com/ChasePodiatry" data-tabs="timeline"
                   data-width="500"
                   data-height="350" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false"
                   data-show-facepile="true">
              </div>
            </div>

            <div class="fb-root"></div>
            <component is="script" async defer crossorigin="anonymous"
                       src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v19.0"
                       nonce="qIsAOwKQ"></component>
          </template>
        </CookiePrompt>
      </div>
      <FooterRegistrations class="md:hidden"/>
    </div>
    <div class="mt-10 text-center">
      &copy; Chase Podiatry
    </div>
  </footer>
</template>

<style scoped lang="postcss">
footer {
  box-shadow: 0 -2px 4px -2px var(--tw-shadow-color);
}

#fb-prompt {
  background: radial-gradient(var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>