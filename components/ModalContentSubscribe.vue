<template>
  <modal-content class="modal-subscribe">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-subscribe-container">
        <div v-if="avatar" class="modal-subscribe-card">
          <div class="modal-subscribe-avatar" :lazy-background="avatar"></div>
        </div>
        <div v-if="title" class="modal-subscribe-title">{{ title }}</div>
        <slot name="body"></slot>
        <div v-if="$slots.bodyDescription" class="modal-subscribe-description">
          <slot name="bodyDescription"></slot>
        </div>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-subscribe-container">
        <div
          v-if="$slots.footerDescription"
          class="modal-subscribe-description"
        >
          <slot name="footerDescription"></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'

export default Vue.extend({
  name: 'ModalContentSubscribe',
  components: {
    ModalContent,
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
    avatar: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
.modal-subscribe {
  max-width: 800px;
}
.modal-subscribe-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.modal-subscribe-title {
  position: relative;
  top: -14px;
  font-size: 16px;
  line-height: lh(16px, 24px);
  text-align: center;
}
.modal-subscribe-avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.modal-subscribe-card {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 98px;
  height: 98px;

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
.modal-subscribe-description {
  font-size: 16px;
  line-height: lh(16px, 24px);
  margin-bottom: 23px;
  .small {
    font-size: 13px;
  }
}
</style>
