<template>
  <i class="icon" :style="style"></i>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Icon',
  props: {
    image: {
      type: String,
      default: () => '',
      required: false,
    },
  },
  computed: {
    style() {
      return {
        backgroundImage: `url(${this.image})`,
      }
    },
  },
})
</script>

<style lang="scss">
.icon {
  position: relative;
  display: inline-block;
  width: $line-height-base * $font-size-base;
  height: $line-height-base * $font-size-base;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
}
</style>
