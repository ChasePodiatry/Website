<script setup lang="ts">
const priceData = await queryContent('/about/prices').findOne();
</script>

<template>
  <table class="w-full mt-5 striped">
    <tbody>
    <tr>
      <td>
        <strong>General assessment and treatment</strong>
        <p>
          All new patients will have approximately 30-minute appointment for assessment of medical risk in relation to
          foot health and history of foot condition. Initial treatment is included where appropriate.
        </p>
      </td>
      <td class="font-bold content-start text-center text-nowrap">New patient</td>
      <td class="font-bold content-start text-center text-nowrap">Routine care <br/> or follow up</td>
    </tr>
    <tr v-for="treatment in priceData.items">
      <template v-if="treatment">
      <td>
        <MDC class="font-bold" :value="treatment.name"/>
        <MDC :value="treatment.description" v-if="treatment.description"/>
      </td>
      <template v-if="treatment.new && treatment.routine">
        <td class="text-center"><MDC :value="treatment.new" /></td>
        <td class="text-center"><MDC :value="treatment.routine" /></td>
      </template>
      <template v-else>
        <td colspan="2" class="text-center"><MDC :value="treatment.price" /></td>
      </template>
      </template>
      <template v-else>
        <td colspan="3">&nbsp;</td>
      </template>
    </tr>

<!--    <tr>-->
<!--      <td colspan="3" class="!p-0 h-0"><hr/></td>-->
<!--    </tr>-->
    </tbody>
  </table>
</template>

<style scoped>

</style>