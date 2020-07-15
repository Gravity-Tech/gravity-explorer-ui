<template>
  <modal-content class="modal-increase-deposit" :show-footer="showFooter">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-increase-deposit-container">
        <slot name="body"></slot>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-increase-deposit-container">
        <slot name="footer"></slot>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'

export default Vue.extend({
  name: 'ModalContentIncreaseDeposit',
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
.modal-increase-deposit {
  @media (min-width: 690px) {
    max-width: 630px;
  }
}
.modal-increase-deposit-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
