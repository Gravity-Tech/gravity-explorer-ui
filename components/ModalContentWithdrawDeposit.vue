<template>
  <modal-content class="modal-w-deposit">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-w-deposit-container">
        <div class="modal-w-deposit-card">
          <div class="modal-w-deposit-logo">
            <div class="modal-w-deposit-logo-icon">
              <icon image="/img/icons/ethereum.svg"></icon>
            </div>
            <div class="modal-w-deposit-logo-name">Ethereum</div>
          </div>
          <div class="modal-w-deposit-min">
            <span class="text-muted">Min:</span> 10 ETH
          </div>
        </div>

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
import FormInput from '~/components/FormInput.vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'ModalContentWithdrawDeposit',
  components: {
    ModalContent,
    Btn,
    FormInput,
    Icon,
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
.modal-w-deposit-logo {
  padding: 11px 20px 11px 26px;
  font-size: 13px;
  display: flex;
  align-items: center;
  background: #323652;
  border-radius: 6px;
}
.modal-w-deposit-logo-icon {
  position: relative;
  width: 67px;
  height: 67px;
  margin-right: 9px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  &:before {
    background: linear-gradient(
      145deg,
      rgba(96, 0, 255, 0.15) 0%,
      #4200c0 34.37%,
      #ff5e00 100%
    );
  }
  &:after {
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: linear-gradient(193deg, #2e3356 -28.01%, #10111a 90.88%);
  }
  i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    z-index: 2;
  }
}
</style>
