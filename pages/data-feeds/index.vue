<template>
  <data-feeds :list="datafeedList"></data-feeds>
</template>

<script lang="ts">
import Vue from 'vue'
import DataFeeds from '~/components/DataFeeds.vue'
import { DatafeedDataProvider, Datafeed } from '~/data/providers/datafeed'


export default Vue.extend({
  components: {
    DataFeeds,
  },
  data() {
    return { datafeedList: [] as Datafeed[] }
  },
  mounted() {
    DatafeedDataProvider.fetchAll().then((list) => {
      this.datafeedList = list
    })
  },
})
</script>

<style></style>
