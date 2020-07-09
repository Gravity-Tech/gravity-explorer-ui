<template>
  <div class="container">
    <btn tag="nuxt-link" class="btn-primary" :to="'/nodes'">
      nodes
    </btn>
    <div class="dropdown">
      <btn
        id="dropdownMenuButton2"
        v-dropdown
        class="btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        nodes
      </btn>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
        <a class="dropdown-item" href="#">Explorer</a>
        <a class="dropdown-item" href="#">Node control panel</a>
        <a class="dropdown-item" href="#">FAQ</a>
        <a class="dropdown-item" href="#">Docs</a>
        <a class="dropdown-item" href="#">Log out</a>
      </div>
    </div>

    <btn class="btn-primary" @click="$modal.push('modal-content-nebula')">
      modal-content-nebula
    </btn>
    <btn class="btn-primary" @click="$modal.push('modal-content-node')">
      modal-content-node
    </btn>
    <btn
      class="btn-primary"
      @click="$modal.push('modal-content-withdraw-deposit')"
    >
      modal-content-withdraw-deposit
    </btn>

    <client-only>
      <modal name="modal-content-nebula">
        <modal-content-nebula
          rating="8.7"
          modal-head="Nebula @123"
          card-title="Nebula @123"
          card-avatar="/img/card/avatar.jpg"
          :nodes-list="nodesList"
          caption="Nodes List:"
          :data="{
            regularity: 'per hour',
            chain: 'ETH',
            fee: '~2 ETH | 487.14',
            feed: 'Data feed: Binance-G',
            description:
              '5 minutes avg. USD price feed of one troy fine ounce of gold on a London Good Delivery gold bar.',
          }"
        >
        </modal-content-nebula>
      </modal>

      <modal name="modal-content-node">
        <modal-content-node
          rating="8.7"
          modal-head="LinkPool Node 2"
          card-date="27.05.2020"
          card-deposit="~10 WAVES | $12.6"
          card-avatar="/img/card/example-logo.svg"
          :nodes-list="nodesList"
          caption="Nebulae List:"
          :data="{
            name: 'LinkPool Node 1',
            address: '0x123456789',
            description:
              'LinkPool is a leading Gravity node service provider with the goal of providing tools and services that benefit the Gravity ecosystem. ',
            website: {
              name: 'linkpool.io ',
              href: 'https://linkpool.io',
            },
          }"
        >
        </modal-content-node>
      </modal>

      <modal name="modal-content-withdraw-deposit">
        <modal-content-withdraw-deposit
          min="10 ETH"
          modal-head="Withdraw deposit"
          card-wallet="Ethereum"
          card-icon="Ethereum"
        >
        </modal-content-withdraw-deposit>
      </modal>
    </client-only>

    <table-block>
      <template v-slot:head>
        <tr>
          <th style="width: 10%;">Name</th>
          <th>About</th>
          <th>Score (0-10)</th>
          <th>Deposit chain</th>
          <th>Node deposit</th>
          <th>Joined</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td style="width: 10%;">LinkPool Node 1</td>
          <td>
            Payouts depend on platform but are always automated and almost
            instant.
          </td>
          <td>10</td>
          <td>Waves</td>
          <td>Waves</td>
          <td>27.05.2020</td>
        </tr>
      </template>
    </table-block>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'
import TableBlock from '~/components/Table.vue'
import ModalContentNebula from '~/components/ModalContentNebula.vue'
import ModalContentNode from '~/components/ModalContentNode.vue'
import ModalContentWithdrawDeposit from '~/components/ModalContentWithdrawDeposit.vue'

export default Vue.extend({
  components: {
    Btn,
    TableBlock,
    ModalContentNebula,
    ModalContentNode,
    ModalContentWithdrawDeposit,
  },
  data: () => ({
    nodesList: [
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
      {
        name: 'LinkPool Node 1',
        description:
          'Payouts depend on platform but are always automated and almost instant.',
        type: 'Waves',
        count: '10',
        data: '27.05.2020',
        amount: '~10 WAVES | $12.6',
      },
    ],
  }),
})
</script>

<style></style>
