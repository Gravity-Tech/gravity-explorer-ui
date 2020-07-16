<template>
  <div class="container">
    <tabs-and-search></tabs-and-search>
    <table-block style="margin-bottom: 34px;">
      <template v-slot:head>
        <tr>
          <th class="first-td">Data feed</th>
          <th>Description</th>
          <th style="width: 50%;">Available Extractors</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td class="first-td">Binance-ETH_USD</td>
          <td>Binance-ETH_USD</td>
          <td style="width: 50%;">
            Ventuary Binance
            <br />
            Tradisys Binance
          </td>
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
  name: 'DataFeeds',
  components: {
    TableBlock,
    TabsAndSearch,
  },
})
</script>

<style lang="scss"></style>
