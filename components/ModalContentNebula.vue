<template>
  <modal-content class="modal-nebula">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <card type-img="avatar" :img="cardAvatar">
        <div class="modal-nebula-scope">8.7</div>
        {{ cardTitle }}
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
  name: 'ModalContentNebula',
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
    cardTitle: {
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
.modal-nebula {
}
.modal-nebula-scope {
}
</style>
