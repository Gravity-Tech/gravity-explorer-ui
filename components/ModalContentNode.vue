<template>
  <modal-content class="modal-node">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <card type-img="logo" :img="cardAvatar">
        <div class="modal-node-scope">8.7</div>
        <div class="small">
          <div v-if="cardDate" style="margin-bottom: 12px;">
            <span class="text-muted">Joined:</span>
            {{ cardDate }}
          </div>
          <div v-if="cardDeposit">
            <span class="text-muted">Deposit:</span>
            <span class="text-green">{{ cardDeposit }}</span>
          </div>
        </div>
      </card>
    </template>

    <template v-if="nodesList.length" v-slot:footer>
      <table-list>
        <template v-slot:body>
          <tr v-for="(item, index) in nodesList" :key="index">
            <td>{{ item.name }}</td>
            <td class="small" style="width: 40%;">{{ item.description }}</td>
            <td>{{ item.type }}</td>
            <td class="text-green">{{ item.count }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </template>
      </table-list>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Card from '~/components/Card.vue'
import TableList from '~/components/TableList.vue'

export default Vue.extend({
  name: 'ModalContentNode',
  components: {
    ModalContent,
    Card,
    TableList,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    cardDate: {
      type: String,
      default: () => '',
      required: false,
    },
    cardDeposit: {
      type: String,
      default: () => '',
      required: false,
    },
    cardAvatar: {
      type: String,
      default: () => '',
      required: false,
    },
    nodesList: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
})
</script>

<style class="">
.modal-node {
}
</style>
