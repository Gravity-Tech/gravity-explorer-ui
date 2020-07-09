<template>
  <div class="container">
    <btn class="btn-primary" @click="$modal.push('example')">
      example
    </btn>
    <btn class="btn-primary" @click="$modal.push('example1')">
      example1
    </btn>

    <modal name="example">
      <modal-content-nebula
        modal-head="Nebula @123"
        card-title="Nebula @123"
        card-avatar="/img/card/avatar.jpg"
        :nodes-list="nodesList"
      >
      </modal-content-nebula>
    </modal>

    <modal name="example1">
      <modal-content-node
        modal-head="LinkPool Node 2"
        card-date="27.05.2020"
        card-deposit="~10 WAVES | $12.6"
        card-avatar="/img/card/avatar.jpg"
        :nodes-list="nodesList"
      >
      </modal-content-node>
    </modal>

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
import ModalContent from '~/components/ModalContent.vue'
import ModalContentNebula from '~/components/ModalContentNebula.vue'
import ModalContentNode from '~/components/ModalContentNode.vue'
import Card from '~/components/Card.vue'
import TableList from '~/components/TableList.vue'

export default Vue.extend({
  components: {
    Btn,
    TableBlock,
    ModalContent,
    Card,
    TableList,
    ModalContentNebula,
    ModalContentNode,
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
