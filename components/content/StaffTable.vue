<script setup lang="ts">
const staffData = await queryContent('/about/staff').findOne();

</script>

<template>
  <table class="flex flex-col striped">
    <template v-for="staff in staffData.body">
      <tr class="flex flex-col" v-if="typeof staff === 'object'">
        <td class="font-bold">{{ staff.name }}</td>
        <td>{{ staff.reg ?? '' }}</td>
        <td>
          <ul class="list-none pl-0">
            <template v-for="e in staff.edu.split('\n')">
              <li v-if="e">{{e}}</li>
            </template>
          </ul>
        </td>
      </tr>
    </template>
  </table>
</template>

<style scoped lang="postcss">

</style>