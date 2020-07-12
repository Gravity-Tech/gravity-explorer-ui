<template>
  <div class="container">
    <tabs-and-search></tabs-and-search>
    <table-block style="margin-bottom: 34px;">
      <template v-slot:head>
        <tr>
          <th>Name</th>
          <th style="width: 100px;">Status</th>
          <th>Data Feed</th>
          <th>Description</th>
          <th style="width: 140px;">Threshold Score<br />(0-10)</th>
          <th>Target chain</th>
          <th>Regularity<br />(hour/day)</th>
          <th>Subscription fee</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td>Nebula @Demo</td>
          <td style="width: 100px;">
            Active
          </td>
          <td>Binance-Huobi-BTC_USD</td>
          <td>Demo Nebula to accumulate Gravity score.</td>
          <td style="width: 140px;">0.1</td>
          <td>Waves, ID=1</td>
          <td>~per hour</td>
          <td>~10 WAVES | $12.6</td>
        </tr>
      </template>
    </table-block>
    <div class="text-right" style="margin-bottom: 34px;">
      <btn class="btn-primary" style="padding-left: 70px; padding-right: 70px;"
        >Add Nebula</btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableBlock from '~/components/Table.vue'
import TabsAndSearch from '~/components/TabsAndSearch.vue'
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  name: 'Nebulae',
  components: {
    TableBlock,
    TabsAndSearch,
    Btn,
  },
})
</script>

<style lang="scss"></style>
