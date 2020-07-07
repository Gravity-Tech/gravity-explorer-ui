<template>
  <component :is="tag" class="btn" @click="$emit('click', $event)">
    <b><slot></slot></b>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
  props: {
    tag: {
      type: String,
      default: () => 'button',
      required: false,
    },
  },
})
</script>

<style lang="scss"></style>
