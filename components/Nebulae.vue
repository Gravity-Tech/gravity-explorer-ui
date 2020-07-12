<template>
  <div class="container">
    <tabs-and-search></tabs-and-search>
    <table-block>
      <template v-slot:head>
        <tr>
          <th style="width: 10%;">Name</th>
          <th>Status</th>
          <th>Data Feed</th>
          <th>Description</th>
          <th>Threshold Score<br />(0-10)</th>
          <th>Target chain</th>
          <th>Regularity<br />(hour/day)</th>
          <th>Subscription fee</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td style="width: 10%;">Nebula @Demo</td>
          <td>
            Active
          </td>
          <td>Demo</td>
          <td>Demo Nebula to accumulate Gravity score.</td>
          <td>0.1</td>
          <td>Waves, ID=1</td>
          <td>~per hour</td>
          <td>~10 WAVES | $12.6</td>
        </tr>
      </template>
    </table-block>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableBlock from '~/components/Table.vue'
import TabsAndSearch from '~/components/TabsAndSearch.vue'

export default Vue.extend({
  name: 'Nebulae',
  components: {
    TableBlock,
    TabsAndSearch,
  },
})
</script>

<style lang="scss"></style>
