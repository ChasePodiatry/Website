<script setup lang="ts">
const priceData = await queryContent('/about/prices').findOne();
</script>

<template>
  <table class="w-full mt-5 striped">
    <thead>
    <tr>
      <td>Treatment</td>
      <td>Price</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="treatment in priceData.body">
      <template v-if="treatment">
      <td>
        <MDC :value="treatment.name" class="font-bold"/>
        <MDC :value="treatment.description" v-if="treatment.description"/>
      </td>
      <td>
        <MDC :value="treatment.price" v-if="treatment.price"/>
      </td>
      </template>
      <template v-else>
        <td colspan="2">&nbsp;</td>
      </template>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>