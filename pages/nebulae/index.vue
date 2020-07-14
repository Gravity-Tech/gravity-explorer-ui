<template>
  <nebulae :nebula-list="nebulaList"></nebulae>
</template>

<script lang="ts">
import Vue from 'vue'
import Nebulae from '~/components/Nebulae.vue'
import { NebulaDataProvider } from '~/data/providers/nebula'
import { Nebula } from '~/models/model/nebula'

export default Vue.extend({
  components: {
    Nebulae,
  },
  data() {
    return { nebulaList: [] as Nebula[] }
  },
  mounted() {
    NebulaDataProvider.fetchAllNebulas().then((list) => {
      this.nebulaList = list
    })
  },
})
</script>

<style></style>
