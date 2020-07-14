<template>
  <nodes :nodes-list="nodesList"></nodes>
</template>

<script lang="ts">
import Vue from 'vue'
import Nodes from '~/components/Nodes.vue'
import { NodeDataProvider } from '~/data/providers/node'
import { Node } from '~/models/model/node'

export default Vue.extend({
  components: {
    Nodes,
  },
  data() {
    return { nodesList: [] as Node[] }
  },
  mounted() {
    NodeDataProvider.fetchAllNodes().then((list) => {
      this.nodesList = list
    })
  },
})
</script>

<style></style>
