<template>
  <modal-content class="modal-nebula">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="row no-gutters">
        <card type-img="avatar" :img="cardAvatar">
          <template v-if="rating" v-slot:rating>
            {{ rating }}
          </template>
          {{ cardTitle }}
        </card>
        <div class="modal-nebula-data">
          <ul>
            <li><span class="text-muted">Regularity:</span> per hour</li>
            <li><span class="text-muted">Target chain:</span> ETH</li>
            <li>
              <span class="text-muted">Subscription fee:</span>
              <span class="text-green">~2 ETH | 487.14</span>
            </li>
            <li><span class="text-muted">Data feed:</span> Binance-G</li>
          </ul>
          <div class="modal-nebula-description">
            5 minutes avg. USD price feed of one troy fine ounce of gold on a
            London Good Delivery gold bar.
          </div>
          <btn class="modal-nebula-btn btn-primary">
            Subscribe
          </btn>
        </div>
      </div>
    </template>

    <template v-if="nodesList.length" v-slot:footer>
      <table-list :caption="caption">
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
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  name: 'ModalContentNebula',
  components: {
    ModalContent,
    Card,
    TableList,
    Btn,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    caption: {
      type: String,
      default: () => '',
      required: false,
    },
    rating: {
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

<style lang="scss">
.modal-nebula-data {
  padding-left: 42px;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  ul {
    font-size: 13px;
    line-height: lh(13px, 19px);
    list-style: none;
    padding-left: 0;
    margin-bottom: 19px;
    li {
      display: block;
      margin-bottom: 9px;
    }
  }
}
.modal-nebula-description {
  margin-bottom: 27px;
}
.modal-nebula-btn {
  min-width: 200px;
}
</style>
