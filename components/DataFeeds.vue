<template>
  <div class="container">
    <tabs-and-search></tabs-and-search>
    <table-block style="margin-bottom: 34px;">
      <template v-slot:head>
        <tr>
          <th class="data-feeds-first-td">Data feed</th>
          <th>Description</th>
          <th style="width: 50%;">Available Extractors</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="datafeed in list" :key="datafeed.datafeed_tag">
          <td class="data-feeds-first-td">{{ datafeed.datafeed_tag }}</td>
          <td>
            <span class="data-feeds-second-td">{{ datafeed.description }}</span>
          </td>
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
  // eslint-disable-next-line vue/require-prop-types
  props: ['list']
})
</script>

<style lang="scss">
.data-feeds-first-td {
  padding-left: 36px !important;
}

.data-feeds-second-td {
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
  display: block;
}
</style>
