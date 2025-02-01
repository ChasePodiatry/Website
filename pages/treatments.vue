<script setup lang="ts">
const {data: treatments} = await useAsyncData('treatments', () =>
    queryContent('/treatments/').find()
);
const expandIndex = treatments.value!.length % 2 ? treatments.value!.length - 1 : -1;

useSeoMeta({
  description: "Chase Podiatry offer a range of podiatric, biomechanical, surgical, and general footcare treatments across our two locations in Cannock and Burntwood"
})

definePageMeta({
  layout: "default",
})

</script>

<template>
    <LayoutPageTitle />
    <div class="grid lg:grid-cols-2 gap-10 place-content-stretch">
      <template
          v-for="[index, treatment] in treatments!.entries()"
      >
        <NuxtLink :to="treatment._path" :title="treatment.title"
                  class="bg-gray-100 dark:bg-gray-900 w-full shadow"
                  :class="index == expandIndex ? 'lg:col-span-2' : ''"
        >
          <div
              class="flex flex-col md:flex-row h-full"
              :class="index == expandIndex ? 'lg:flex-row' : 'lg:flex-col'"
          >

            <NuxtPicture
                v-if="treatment.cover"
                :src="treatment.cover"
                class="flex-shrink-0 h-52 w-full md:w-1/3 md:h-full overflow-hidden"
                :class="{
                'md:order-last': index % 2,
                'lg:w-1/3': index == expandIndex,
                'lg:w-full': index != expandIndex,
                'lg:h-72': index != expandIndex,
                }"
                sizes="sm:100vw md:34vw lg:50vw"
                :alt="treatment.coverAlt ?? treatment.title"
                :img-attrs="{class: 'h-full w-full object-cover'}"
            />
            <div class="px-5 py-4">
              <h2>{{ treatment.title }}</h2>
              <p v-if="treatment.description">
                {{ treatment.description.replace(new RegExp("\.?$"), "...") }}
              </p>
              <p v-else-if="treatment.excerpt">
                {{ treatment.excerpt.toString().replace(new RegExp("\.?$"), "...") }}
              </p>
              <p v-else>
                Explore our {{ treatment.title!.toLowerCase() }} treatment options
              </p>
            </div>
          </div>
        </NuxtLink>
      </template>
    </div>
</template>

<style scoped>

</style>