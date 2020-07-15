<template>
  <label class="btn-checkbox" :class="classCheckbox">
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
    size: {
      type: String,
      default: () => '',
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    classCheckbox() {
      return {
        'btn-checkbox--sm': this.size === 'sm',
      }
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
  height: $input-height;
}
.btn-checkbox--sm {
  height: 30px;
}
.btn-checkbox-label {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 5px 10px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid $primary;
  font-size: 13px;
}
.btn-checkbox-input:checked {
  ~ .btn-checkbox-label {
    background: $primary;
    color: #1d1f23;
  }
}
</style>
