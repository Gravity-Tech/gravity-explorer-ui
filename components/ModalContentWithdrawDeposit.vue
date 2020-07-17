<template>
  <modal-content class="modal-w-deposit" :show-footer="showFooter" size="sm">
    <template v-slot:head>
      <slot name="head"></slot>
    </template>

    <template v-slot:body>
      <div class="modal-w-deposit-card">
        <coin-card-logo :name="coin.name" :logo="coin.logo"></coin-card-logo>
        <div class="modal-w-deposit-min">
          <span class="text-muted">Min:</span> {{ coin.min }}
        </div>
      </div>

      <slot name="body"></slot>
    </template>

    <template v-slot:footer>
      <btn class="btn-primary btn-block">Continue</btn>
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
.modal-w-deposit-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
}
</style>
