<template>
  <modal-content class="modal-w-success" :show-footer="showFooter">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-w-success-container">
        <div class="modal-w-success-card">
          <icon image="/img/icons/verification.svg"></icon>
        </div>
        <div v-if="title" class="modal-w-success-title">
          {{ title }}
        </div>
        <div v-if="description" class="modal-w-success-description text-muted">
          {{ description }}
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-w-success-container">
        <btn class="btn-primary btn-block">View details</btn>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Icon from '~/components/Icon.vue'
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  name: 'ModalContentWithdrawDeposit',
  components: {
    ModalContent,
    Icon,
    Btn,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    title: {
      type: String,
      default: () => '',
      required: false,
    },
    description: {
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
.modal-w-success {
  max-width: 630px;
}
.modal-w-success-container {
  max-width: 276px;
  margin-left: auto;
  margin-right: auto;
}
.modal-w-success-title {
  font-size: 15px;
  line-height: lh(15px, 22px);
  margin-bottom: 12px;
  text-align: center;
}
.modal-w-success-description {
  font-size: 13px;
  color: $text-muted;
  line-height: lh(13px, 19px);
  text-align: center;
}
.modal-w-success-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 122px;
  margin-bottom: 38px;
  .icon {
    width: 67px;
    height: 67px;
    z-index: 3;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
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
</style>
