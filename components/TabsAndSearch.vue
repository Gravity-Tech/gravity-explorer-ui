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
      <search-input placeholder="Search"></search-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Tabs from '~/components/Tabs.vue'
import SearchInput from '~/components/SearchInput.vue'

export default Vue.extend({
  name: 'TabsAndSearch',
  components: {
    Tabs,
    SearchInput,
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
