<template>
  <modal-content class="modal-w-deposit" :class="modalClass">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-w-deposit-container">
        <div class="modal-w-deposit-default-content">
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
              <span style="float: right;">
                <span class="text-muted">Gas:</span> 100 Gwei
              </span>
            </template>
          </form-input>
        </div>

        <div class="modal-w-deposit-success-content">
          <div class="modal-w-deposit-success-card">
            <icon image="/img/icons/verification.svg"></icon>
          </div>
          <div v-if="success.title" class="modal-w-deposit-success-title">
            {{ success.title }}
          </div>
          <div
            v-if="success.description"
            class="modal-w-deposit-success-description text-muted"
          >
            {{ success.description }}
          </div>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-w-deposit-container">
        <div class="modal-w-deposit-default-content">
          <btn class="btn-primary btn-block">Continue</btn>
        </div>
        <div class="modal-w-deposit-success-content">
          <btn class="btn-primary btn-block">View details</btn>
        </div>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Icon from '~/components/Icon.vue'
import Btn from '~/components/Btn.vue'
import FormInput from '~/components/FormInput.vue'

export default Vue.extend({
  name: 'ModalContentWithdrawDeposit',
  components: {
    ModalContent,
    Icon,
    Btn,
    FormInput,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    success: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },
  computed: {
    modalClass() {
      const active = !!this.success.active
      return { 'modal-w-deposit-success': active }
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
.modal-w-deposit-success-card,
.modal-w-deposit-logo-icon {
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
}
.modal-w-deposit-logo-icon {
  position: relative;
  width: 67px;
  height: 67px;
  margin-right: 9px;

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
.modal-w-deposit-success-content {
  display: none;
}
.modal-w-deposit-success {
  .modal-w-deposit-success-content {
    display: block;
  }
  .modal-w-deposit-default-content {
    display: none;
  }
}
.modal-w-deposit-success-title {
  font-size: 15px;
  line-height: lh(15px, 22px);
  margin-bottom: 12px;
  text-align: center;
}
.modal-w-deposit-success-description {
  font-size: 13px;
  color: $text-muted;
  line-height: lh(13px, 19px);
  text-align: center;
}
.modal-w-deposit-success-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 122px;
  margin-bottom: 38px;
  &:before,
  &:after {
    border-radius: 6px;
  }
  .icon {
    width: 67px;
    height: 67px;
    z-index: 3;
  }
}
</style>
