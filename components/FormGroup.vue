<template>
  <div class="form-group">
    <label v-if="$slots.label" class="form-control-label">
      <slot name="label"></slot>
    </label>
    <div class="form-control-content">
      <slot></slot>
    </div>
    <div v-if="$slots.text" class="form-text"><slot name="text"></slot></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FormGroup',
})
</script>
