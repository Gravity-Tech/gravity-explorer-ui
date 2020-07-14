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
          <th class="nebulae-first-td">Name</th>
          <th style="width: 100px;">Status</th>
          <th>Data Feed</th>
          <th class="d-none-lg">Description</th>
          <th style="width: 110px;">Threshold<br />Score (0-10)</th>
          <th class="d-none-lg" style="width: 120px;">Target chain</th>
          <th class="d-none-lg" style="width: 120px;">
            Regularity<br />(hour/day)
          </th>
          <th style="width: 140px;">Subscription fee</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="nebula in nebulaList" :key="nebula.address">
          <td class="nebulae-first-td">
            <table-avatar>
              <icon image="/img/card/avatar2.svg"></icon>
            </table-avatar>
            {{ nebula.name }}
          </td>
          <td style="width: 100px;">
            Active
          </td>
          <td>Binance-Huobi-BTC_USD</td>
          <td class="d-none-lg">
            Demo Nebula to accumulate Gravity score.
          </td>
          <td class="text-green" style="width: 110px;">{{ nebula.score }}</td>
          <td class="d-none-lg" style="width: 120px;">
            Waves, ID={{ nebula.target_chain }}
          </td>
          <td class="d-none-lg" style="width: 120px;">
            ~per {{ nebula.regularity }} blocks
          </td>
          <td style="width: 140px;">~10 WAVES | $12.6</td>
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
import Icon from '~/components/Icon.vue'
import TableAvatar from '~/components/TableAvatar.vue'
import { Nebula } from '~/models/model/nebula'
import { FetchCommand } from '~/data/global'

type Props = {
  nebulaList: Nebula[]
}

export default Vue.extend({
  name: 'Nebulae',
  components: {
    TableBlock,
    TabsAndSearch,
    Btn,
    Icon,
    TableAvatar,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['nebulaList', 'isLoading'],
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
      this.command.page = Number(this.command.page || 0) + 1
      this.$emit('query-update', this.command)
    },
  },
})
</script>

<style lang="scss">
.nebulae-first-td {
  padding-left: 36px !important;
}
</style>
