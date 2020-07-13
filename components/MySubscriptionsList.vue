<template>
  <div class="container" style="padding-top: 30px;">
    <h3 style="margin-bottom: 6px;">
      My subscriptions list
    </h3>
    <div class="my-subscriptions-list-panel">
      <div>
        Deposit Balance: <span class="text-green">~1.1 ETH | $261.39</span>
      </div>
      <div>
        <btn class="btn-primary">Add Deposit</btn>
        <btn class="btn-secondary" style="margin-left: 16px;"
          >Withdraw deposit</btn
        >
      </div>
    </div>
    <table-block style="margin-bottom: 38px;">
      <template v-slot:head>
        <tr>
          <th class="nebulae-first-td">Description</th>
          <th>Name</th>
          <th>Cost</th>
          <th>Nebula-SC</th>
          <th>Target Chain</th>
          <th>User-SC</th>
          <th>Action</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td class="nebulae-first-td">ETH / USD price</td>
          <td>CoinMarketCap</td>
          <td>$0.08/hour</td>
          <td>0x1441...151525</td>
          <td>ETH, ID=1</td>
          <td>0xDdA...2a5bcB</td>
          <td>
            <a href="/" class="link-invert">
              <icon
                image="/img/icons/close-green.svg"
                style="width: 14px; height: 14px; top: 2px;"
              ></icon>
              Cancel
            </a>
          </td>
        </tr>
      </template>
    </table-block>
    <hr style="margin-bottom: 38px;" />
    <tabs
      :items="[
        { label: 'My Nebulae', to: { name: 'my-subscriptions-list' } },
        { label: ' History', to: { name: 'nodes' } },
      ]"
    ></tabs>
    <table-block style="margin-bottom: 34px;">
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
        <tr v-for="index in 20" :key="index">
          <td class="nebulae-first-td">Nebula @Demo</td>
          <td style="width: 100px;">
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableBlock from '~/components/Table.vue'
import Tabs from '~/components/Tabs.vue'
import Btn from '~/components/Btn.vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'MySubscriptionsList',
  components: {
    TableBlock,
    Tabs,
    Icon,
    Btn,
  },
})
</script>

<style lang="scss">
.nebulae-first-td {
  padding-left: 36px !important;
}
.my-subscriptions-list-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
</style>
