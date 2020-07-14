<template>
  <div class="container">
    <tabs-and-search @query-update="queryUpdate"></tabs-and-search>
    <table-block
      ref="table"
      style="margin-bottom: 34px;"
      :is-loading="isLoading"
      @load-more="pageUpdate"
    >
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
import {
  // DatafeedDataProvider,
  // Datafeed,
  FetchCommand,
} from '~/data/global'

export default Vue.extend({
  name: 'DataFeeds',
  components: {
    TableBlock,
    TabsAndSearch,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['list', 'isLoading'],
  data() {
    return {
      command: { page: 0 } as FetchCommand,
    }
  },
  methods: {
    queryUpdate(query: string) {
      this.$refs.table.$el.querySelector('tbody').scrollTo(0, 0)
      this.command = { query, page: 0 }
      this.$emit('query-update', this.command)
    },
    pageUpdate() {
      if (this.isLoading.value) {
        return
      }

      this.command.page = Number(this.command.page || 0) + 1
      this.$emit('query-update', this.command)
    },
  },
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
