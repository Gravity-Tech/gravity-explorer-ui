<template>
  <modal-content class="modal-w-deposit" :show-footer="showFooter">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-w-deposit-container">
        <div class="modal-w-deposit-card">
          <coin-card-logo :name="coin.name" :logo="coin.logo"></coin-card-logo>
          <div class="modal-w-deposit-min">
            <span class="text-muted">Min:</span> {{ coin.min }}
          </div>
        </div>

        <slot name="body"></slot>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-w-deposit-container">
        <btn class="btn-primary btn-block">Continue</btn>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Btn from '~/components/Btn.vue'
import CoinCardLogo from '~/components/CoinCardLogo.vue'

export default Vue.extend({
  name: 'ModalContentWithdrawDeposit',
  components: {
    ModalContent,
    Btn,
    CoinCardLogo,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    coin: {
      type: Object,
      default: () => ({}),
      required: false,
    },
    showFooter: {
      type: Boolean,
      default: () => true,
      required: false,
    },
  },
})
</script>

<style lang="scss">
.modal-w-deposit {
  max-width: 630px;
}
.modal-w-deposit-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.modal-w-deposit-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
}
</style>
