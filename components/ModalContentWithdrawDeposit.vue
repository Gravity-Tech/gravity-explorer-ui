<template>
  <modal-content class="modal-withdraw-deposit">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-withdraw-deposit-container">
        <form-input value="0x1015e2182E6AD26FB945723F7180795693A80D15">
          <template v-slot:label>
            To
          </template>
        </form-input>
        <form-input type="number" value="25">
          <template v-slot:label>
            Amount
          </template>
          <template v-slot:text>
            <span class="text-muted">Equal to</span> $5.590
            <span style="float: right;"
              ><span class="text-muted">Gas:</span> 100 Gwei</span
            >
          </template>
        </form-input>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-withdraw-deposit-container">
        <btn class="btn-primary btn-block">Continue</btn>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Btn from '~/components/Btn.vue'
import FormInput from '~/components/FormInput.vue'

export default Vue.extend({
  name: 'ModalContentWithdrawDeposit',
  components: {
    ModalContent,
    Btn,
    FormInput,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
.modal-withdraw-deposit {
  max-width: 630px;
}
.modal-withdraw-deposit-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
