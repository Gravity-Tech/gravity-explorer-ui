<template>
  <modal-content class="modal-login">
    <template v-if="modalHead" v-slot:head>
      {{ modalHead }}
    </template>

    <template v-slot:body>
      <div class="modal-login-container">
        <slot name="body"></slot>
      </div>
    </template>

    <template v-slot:footer>
      <div class="modal-login-container">
        <slot name="footer"></slot>
      </div>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'

export default Vue.extend({
  name: 'ModalContentLogin',
  components: {
    ModalContent,
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
.modal-login {
  @media (min-width: 690px) {
    max-width: 630px;
  }
}
.modal-login-container {
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
