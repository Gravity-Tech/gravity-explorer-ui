<template>
  <div class="modal-nebula">
    <button class="modal-close" aria-label="Close Modal" @click="$modal.pop()">
      <icon>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(45 2.5 0)"
            fill="currentColor"
          />
          <rect
            y="27.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(-45 0 27.5)"
            fill="currentColor"
          />
        </svg>
      </icon>
    </button>
    <div v-if="!!$slots.head" class="modal-head">
      <slot name="head"></slot>
    </div>
    <div v-if="!!$slots.body" class="modal-body">
      <slot name="body"></slot>
    </div>
    <hr />
    <div v-if="!!$slots.footer" class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'ModalContent',
  components: { Icon },
})
</script>
