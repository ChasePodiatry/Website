<script setup lang="ts">
const open = ref(false);

async function toggle(e: Event) {
  const target = e.target as HTMLDetailsElement;
  open.value = target.open;
}
</script>

<template>
  <details class="rounded-xl bg-chase-purple-200 dark:bg-chase-purple-700 my-5" @toggle="toggle">
    <summary class="flex flex-row items-center hover:cursor-pointer px-4 gap-5
    border-2 border-chase-purple-100 dark:border-chase-purple-700
    hover:border-chase-purple hover:dark:border-chase-purple-300
"
             :class="open ? 'rounded-t-xl' : 'rounded-xl'"
    >
      <div class="flex-grow text-2xl font-bold">
        <ContentSlot />
      </div>

      <div class="rounded-l bg-purple-100 dark:bg-chase-purple min-w-24 sm:min-w-28 my-3 h-full p-2 flex gap-1 justify-center items-center">
        <template v-if="open">
          Close
          <Icon name="carbon:chevron-up" class="self-center"/>
        </template>
        <template v-else>
          Open
          <Icon name="carbon:chevron-down"/>
        </template>
      </div>
    </summary>

      <div class="px-4">
        <ContentSlot name="body" />
      </div>

  </details>
</template>

<style scoped lang="postcss">

</style>