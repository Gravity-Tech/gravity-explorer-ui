<template>
  <div class="tabs-and-search">
    <div>
      <tabs
        :items="[
          { label: 'Nebulae', to: { name: 'nebulae' } },
          { label: 'Nodes', to: { name: 'nodes' } },
          { label: 'Data feeds', to: { name: 'data-feeds' } },
        ]"
      ></tabs>
    </div>
    <div>
      <search-input placeholder="Search" @input="queryUpdate"></search-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from '~/components/Tabs.vue'
import SearchInput from '~/components/SearchInput.vue'

function getDefaultComponent(root: any): any {
  for (const node of root.$children) {
    if (node._name === '<Default>') {
      return node
    }
  }
}

export default Vue.extend({
  name: 'TabsAndSearch',
  components: {
    Tabs,
    SearchInput,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['initialState'],
  data() {
    // eslint-disable-next-line no-labels
    return {
      query: '',
      defaultNode: getDefaultComponent(this.$root),
    }
  },
  beforeMount() {
    console.log('TabsAndSearch gets mounted', this.defaultNode)
  },
  beforeDestroy() {
    console.log('TabsAndSearch gets destroyed')
  },
  methods: {
    queryUpdate(event: InputEvent, query: string) {
      // console.log({ event, query })
      this.query = query
      this.$emit('query-update', query)
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';

.tabs-and-search {
  margin-top: 26px;
  display: flex;
  justify-content: space-between;
}
</style>
