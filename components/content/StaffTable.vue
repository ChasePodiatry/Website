<script setup lang="ts">
import type {ParsedContent} from "@nuxt/content/types";
import type {MarkdownNode} from "@nuxt/content/types";

const staffData = await queryContent('/about/staff').findOne();

</script>

<template>
  <table class="flex flex-col striped">
    <template v-for="staff in staffData.body">
      <tr class="flex flex-col" v-if="typeof staff === 'object'">
        <td class="font-bold">{{ staff.name }}</td>
        <td>{{ staff.reg ?? '' }}</td>
        <td>{{ staff.edu }}</td>
      </tr>
    </template>
  </table>
</template>

<style scoped lang="postcss">

</style>