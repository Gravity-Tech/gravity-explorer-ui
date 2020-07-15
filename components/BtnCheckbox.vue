<template>
  <label class="btn-checkbox">
    <input
      :type="type"
      :name="name"
      :checked="checked"
      class="hide btn-checkbox-input"
      @change="$emit('change', $event)"
    />
    <span class="btn-checkbox-label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BtnCheckbox',
  props: {
    type: {
      type: String,
      default: () => 'checkbox',
      required: false,
    },
    checked: {
      type: Boolean,
      default: () => false,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type

.btn-checkbox {
  position: relative;
  display: block;
  margin-bottom: 0;
  cursor: pointer;
  user-select: none;
}
.btn-checkbox-label {
  height: $input-height;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 5px 10px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid $primary;
}
.btn-checkbox-input:checked {
  ~ .btn-checkbox-label {
    background: $primary;
    color: #1d1f23;
  }
}
</style>
