<template>
  <div class="container">
    <tabs-and-search @query-update="queryUpdate"></tabs-and-search>
    <table-block
      ref="table"
      class="nebulae-table"
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
        <tr
          v-for="nebula in mappedNebulaList"
          :key="nebula.address"
          @click="handleNebulaSelect(nebula)"
        >
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
            {{ nebula.description }}
          </td>
          <td class="text-green" style="width: 110px;">{{ nebula.score }}</td>
          <td class="d-none-lg" style="width: 120px;">
            {{ nebula.target_chain }}
          </td>
          <td class="d-none-lg" style="width: 120px;">
            ~per {{ nebula.regularity }} block
          </td>
          <td style="width: 140px;">{{ nebula.subscription_fee }}</td>
        </tr>
      </template>
    </table-block>
    <div class="text-right" style="margin-bottom: 34px; display: none;">
      <btn class="btn-primary" style="padding-left: 70px; padding-right: 70px;"
        >Add Nebula</btn
      >
    </div>
    <client-only>
      <modal v-if="currentNebula" name="modal-content-nebula">
        <modal-content-nebula
          :rating="String(currentNebula.score)"
          :modal-head="currentNebula.name"
          :card-title="currentNebula.name"
          card-avatar="/img/card/avatar.jpg"
          :nodes-list="currentNebulaNodes"
          caption="Nodes List:"
          :data="{
            regularity: 'per hour',
            chain: currentNebula.target_chain,
            fee: '~2 ETH | 487.14',
            feed: 'Data feed: Binance-G',
            description: currentNebula.description,
          }"
        >
        </modal-content-nebula>
      </modal>
    </client-only>
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
import { Node } from '~/models/model/node'
import { FetchCommand } from '~/data/global'
import { NodeDataProvider } from '~/data/providers/node'
import { CurrencyFormatter } from '../misc/format'

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
      currentNebula: null as Nebula | null,
      currentNebulaNodes: [] as Node[],
    }
  },
  computed: {
    mappedNebulaList: function() {
      return this.nebulaList.map((nebula: Nebula) => {
        // @ts-ignore
        const { target_chain, subscription_fee } = nebula;
        return {
          ...nebula,
          subscription_fee: CurrencyFormatter.formatSubFee(target_chain, subscription_fee),
          target_chain: CurrencyFormatter.formatChainDescription(target_chain)
        }
      })
    }
  },
  methods: {
    queryUpdate(query: string) {
      // @ts-ignore
      this.$refs.table.$el.querySelector('tbody').scrollTo(0, 0)
      this.command = { query, page: 0 }
      this.$emit('query-update', this.command)
    },
    pageUpdate() {
      this.command.page = Number(this.command.page || 0) + 1
      this.$emit('query-update', this.command)
    },
    handleNebulaSelect(nebula: Nebula) {
      this.currentNebula = nebula
      console.log({ nebula })
      this.fetchNebulaNodes(nebula)

      this.$modal.push('modal-content-nebula')
    },
    fetchNebulaNodes(nebula: Nebula) {
      // @ts-ignore
      if (!nebula.nodes_using) {
        this.currentNebulaNodes = []
        return
      }

      Promise.all(
        // @ts-ignore
        nebula.nodes_using.map((address) => {
          return NodeDataProvider.fetchExactNode(address)
        }) as Node[]
      ).then((list: Node[]) => {
        this.currentNebulaNodes = list.filter(Boolean)
      })
    },
  },
})
</script>

<style lang="scss">
.nebulae-first-td {
  padding-left: 36px !important;
}
.nebulae-table td {
  cursor: pointer;
}
</style>
