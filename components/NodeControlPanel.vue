<template>
  <div class="container ncpanel">
    <node-info
      rating="8.7"
      :website="{
        name: 'linkpool.io',
        href: 'https://linkpool.io',
      }"
    ></node-info>
    <hr style="margin-bottom: 38px;" />
    <tabs
      :items="[
        {
          label: 'My Nebulae',
          to: getTabLink(),
        },
        { label: 'Node History', to: getTabLink('history') },
        { label: 'My Datafeeds', to: getTabLink('datafeeds') },
        { label: 'My Rewards', to: getTabLink('rewards') },
      ]"
    ></tabs>
    <div v-if="tab === defaultTab" class="ncpanel-table-wrapper">
      <table-block>
        <template v-slot:head>
          <tr>
            <th class="first-td">Name</th>
            <th style="width: 70px;">Status</th>
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
          <tr v-for="index in 20" :key="index">
            <td class="first-td">
              <table-avatar>
                <icon image="/img/card/avatar2.svg"></icon>
              </table-avatar>
              Nebula @Demo
            </td>
            <td style="width: 70px;">
              Active
            </td>
            <td>Binance-Huobi-BTC_USD</td>
            <td class="d-none-lg">
              Demo Nebula to accumulate Gravity score.
            </td>
            <td class="text-green" style="width: 110px;">0.1</td>
            <td class="d-none-lg" style="width: 120px;">Waves, ID=1</td>
            <td class="d-none-lg" style="width: 120px;">~per hour</td>
            <td style="width: 140px;">~10 WAVES | $12.6</td>
          </tr>
        </template>
      </table-block>
      <nuxt-link to="/" class="link-invert">
        <icon
          image="/img/icons/back.svg"
          style="top: 3px; margin-right: 4px;"
        ></icon
        >Browse all nebulae
      </nuxt-link>
    </div>
    <div v-if="tab === 'history'" class="ncpanel-table-wrapper">
      <table-block>
        <template v-slot:head>
          <tr>
            <th class="first-td" style="width: 250px;">Name</th>
            <th style="width: 160px;">Type</th>
            <th>Amount</th>
            <th class="d-none-lg">Currency</th>
            <th>Status</th>
            <th class="d-none-lg">Time</th>
          </tr>
        </template>
        <template v-slot:body>
          <tr v-for="index in 20" :key="index">
            <td class="first-td" style="width: 250px;">
              <table-avatar>
                <icon image="/img/card/avatar2.svg"></icon>
              </table-avatar>
              Nebula @19
            </td>
            <td style="width: 160px;">Data sent</td>
            <td>~2 Etd | $487,14</td>
            <td class="d-none-lg">Etd</td>
            <td class="text-danger">Pending</td>
            <td class="d-none-lg">08.06.2020 03:34:35</td>
          </tr>
        </template>
      </table-block>
    </div>
    <div v-if="tab === 'datafeeds'" class="ncpanel-table-wrapper">
      <table-block>
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
      <nuxt-link to="/data-feeds" class="link-invert">
        <icon
          image="/img/icons/back.svg"
          style="top: 3px; margin-right: 4px;"
        ></icon
        >Browse data feeds
      </nuxt-link>
      <btn class="btn-primary" style="margin-left: 24px;"
        >Install extractor</btn
      >
    </div>
    <div v-if="tab === 'rewards'" class="ncpanel-table-wrapper">
      <table-block>
        <template v-slot:head>
          <tr>
            <th class="first-td" style="width: 250px;">Name</th>
            <th style="width: 160px;">Amount</th>
            <th style="width: 70px;">Currency</th>
            <th>Time</th>
          </tr>
        </template>
        <template v-slot:body>
          <tr v-for="index in 20" :key="index">
            <td class="first-td" style="width: 250px;">
              <table-avatar>
                <icon image="/img/card/avatar2.svg"></icon>
              </table-avatar>
              Nebula @19
            </td>
            <td style="width: 160px;">~2 Etd | $487,14</td>
            <td style="width: 70px;">ETH</td>
            <td>08.06.2020 03:34:35</td>
          </tr>
        </template>
      </table-block>
      <div class="d-inline-block" style="font-size: 13px;">
        <span class="text-muted">
          Total amount:
        </span>
        0.1 ETH
      </div>
      <btn class="btn-primary" style="margin-left: 24px;">Withdraw rewards</btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NodeInfo from '~/components/NodeInfo.vue'
import Tabs from '~/components/Tabs.vue'
import TableBlock from '~/components/Table.vue'
import Icon from '~/components/Icon.vue'
import TableAvatar from '~/components/TableAvatar.vue'
import Btn from '~/components/Btn.vue'

const defaultTab = 'my-nebulae'

export default Vue.extend({
  name: 'NodeControlPanel',
  components: {
    NodeInfo,
    Tabs,
    TableBlock,
    Icon,
    TableAvatar,
    Btn,
  },
  data: () => ({
    defaultTab,
    tab: defaultTab,
  }),
  watch: {
    $route(to) {
      // @ts-ignore
      this.tab = to.query.tab || defaultTab
    },
  },
  created() {
    // @ts-ignore
    this.tab = this.$route.query.tab || defaultTab
  },
  methods: {
    getTabLink(tab?: string) {
      const link = { name: this.$route.name }
      if (tab) {
        // @ts-ignore
        link.query = { tab }
      }
      return link
    },
  },
})
</script>

<style lang="scss">
.ncpanel {
  padding-top: 30px;
  .table {
    margin-bottom: 24px;
    max-height: 335px;
  }
}
.ncpanel-table-wrapper {
  margin-bottom: 34px;
}
</style>
