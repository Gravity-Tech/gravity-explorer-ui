<template>
  <modal-content class="modal-wallet" :show-footer="showFooter">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-wallet-container">
        <slot name="body"></slot>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-wallet-container">
        <slot name="footer"></slot>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'

export default Vue.extend({
  name: 'ModalContentWallet',
  components: {
    ModalContent,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
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
.modal-wallet {
  max-width: 630px;
}
.modal-wallet-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
}
</style>
