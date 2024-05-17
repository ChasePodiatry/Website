<script setup lang="ts">

import fs from "fs";
import git from "isomorphic-git";

const props = defineProps<{
  path: string
  formatFunction: (timestamp: number, timezoneOffset: number) => string,
}>();

const log = (await git.log({fs, dir: process.cwd(), filepath: `package.json`})).pop();

const lastEdited = log ? props.formatFunction(log.commit.author.timestamp, log.commit.author.timezoneOffset) : "Never"

</script>

<template>
  <template v-if="log">
    Version: {{log.oid.substring(0,7)}}
    -
    Last modified {{lastEdited}}
  </template>
</template>

<style scoped>

</style>