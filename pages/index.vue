<script setup lang="ts">
import VueObserveVisibility from "vue3-observe-visibility";

definePageMeta({
  layout: "base",
})

const heroTimeout = 250;

const blurHero = ref(false);
const loadWelcome = ref(false);
const loadLogo = ref(false);
const logoLabelID = useId();

onMounted(() => {
  setTimeout(animateHero, 1000);
})

function animateHero() {
  setTimeout(() => {
    blurHero.value = true;
    setTimeout(() => {
      loadWelcome.value = true
      setTimeout(() => {
        loadLogo.value = true
      }, heroTimeout);
    }, heroTimeout);
  }, heroTimeout);
}

function visibilityChanged(isVisible: boolean, entry: IntersectionObserverEntry) {
  const {target} = entry;
  const stubs = [
    'opacity',
    'translate-x',
    'translate-y',
  ]
  let toRemove: string[] = [];
  if (isVisible) {
    target.classList.forEach((entry: string) => {
      stubs.forEach(stub => {
        if (entry.includes(stub)) {
          toRemove.push(entry);
        }
      })
    })

    target.classList.remove(...toRemove);
  }
}

const visibiltyObserver = {
  callback: visibilityChanged,
  once: true,
  intersection: {
    rootMargin: '10%',
  }
}

</script>

<template>
  <div class="relative block align-middle overflow-hidden py-10">
    <div class="absolute -z-10 -my-10 h-full w-full slow-transition" :class="blurHero ? 'blur-lg opacity-25' : ''">
      <NuxtPicture ref="bg-img" id="hero" class="relative h-full w-full -z-20" src="waiting-room.png"
                   height="500px"
                   :img-attrs="{class: 'object-cover object-center w-full h-full', onLoad: animateHero}"
                   alt="Chase Podiatry's waiting room at our Cannock practice"
      />
    </div>

    <div class="text-chase-purple dark:text-chase-blue-400 container md:w-2/3 ml-1/3 drop-shadow shadow-black">
      <h1 class="w-full">
        <div
            class="slow-transition"
            :class="loadWelcome ? '' : 'opacity-0 translate-y-1/3'"
        >
          Welcome to
        </div>
        <figure
            class="text-center my-5 slow-transition"
            :class="loadLogo ? '' : 'opacity-0 translate-y-1/3'"
        >
          <figcaption :id="logoLabelID" class="sr-only">Chase Podiatry</figcaption>
          <NuxtImg class="w-10/12 md:w-2/3 mx-auto dark:hidden" src="logo.svg"
                   :aria-labelledby="logoLabelID"
          />
          <NuxtImg class="w-10/12 md:w-2/3 mx-auto hidden dark:inline-block" src="logo-light.svg"
                   :aria-labelledby="logoLabelID"
          />
        </figure>
      </h1>
    </div>
  </div>

  <div class="flex max-sm:flex-col items-stretch max-sm:gap-5">
    <div class="container py-5 md:flex-0 flex flex-col justify-around slow-transition md:opacity-0 md:translate-y-1/3"
         v-observe-visibility="visibiltyObserver"
    >
      <h2>Is foot pain affecting your life?</h2>
      <p>
        Painful feet have been known for hundreds of years and even Aristotle was said to have said "when your feet
        hurt, you hurt all over". This is often very true as your feet are the foundation to you walking and standing
        and if they don’t work correctly you will get problems. There are many causes of foot problems and we believe
        our staff are experts in all aspects of footcare from nail cutting to complex foot surgery, as well as providing
        a custom made
        <NuxtLink href="/treatments/biomechanics/#orthosis-orthotics">foot orthosis (insole) service.</NuxtLink>
      </p>
    </div>
    <NuxtPicture src="foot-manipulation.avif"
                 class="md:flex-1 overflow-hidden min-w-60 w-full max-sm:max-h-96 md:aspect-square slow-transition md:opacity-0 md:translate-x-full"
                 :img-attrs="{class: 'object-cover object-center h-full w-full'}"
                 alt="Hands in blue gloves manipulating a foot"
                 sizes="100vw md:310px lg:500px"
                 v-observe-visibility="visibiltyObserver"
    />
  </div>

  <div class="flex max-sm:flex-col bg-chase-purple text-white">
    <NuxtPicture src="doplar-lewis.avif"
                 class="max-sm:order-last md:flex-1 overflow-hidden min-w-60 w-full max-sm:max-h-96 md:aspect-square slow-transition md:opacity-0 md:-translate-x-full"
                 :img-attrs="{class: 'object-cover object-center h-full w-full'}"
                 alt="A Chase Podiatry podiatrist performing a doplar examination on a patients foot"
                 sizes="100vw md:310px lg:500px"
                 v-observe-visibility="visibiltyObserver"
    />
    <div class="container py-5 md:flex-0 flex flex-col justify-around slow-transition md:opacity-0 md:translate-y-1/3"
         v-observe-visibility="visibiltyObserver"
    >
      <h2>Why choose us?</h2>
      <p>
        Choosing a foot care provider is one of the most important decisions you can make for your feet. Here, at Chase
        Podiatry, we are warm, caring, knowledgeable, accessible and we will always take the time to go over all of your
        options and treat you as a person, not just a patient. This enables individual treatment plans to be implemented
        with every member of staff respecting the clients decision on treatments to improve their foot health.
      </p>
      <p>
        Each client will be given a complete assessment then provided with up to date podiatry/chiropody treatments of
        the highest standard. All of our Podiatrists are highly trained with various specialities in foot health
        offering over 50 years experience in foot care. Unlike Foot Health Practitioners, all of our podiatric staff are
        registered and regulated by the
        <NuxtLink href="https://www.hcpc-uk.org/" title="Health and Care Professions Council" target="_blank"
                  rel="external">
          Health & Care Professions Council (HCPC),
        </NuxtLink>
        the Government body for all health care professionals, and
        <NuxtLink href="https://rcpod.org.uk/" title="Royal College of Podiatry" target="_blank" rel="external">
          The Royal College of Podiatry.
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.slow-transition {
  transition: all 500ms ease-in-out;
}
</style>