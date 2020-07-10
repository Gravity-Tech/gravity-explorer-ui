<template>
  <label class="checkbox">
    <input
      :type="type"
      :name="name"
      :checked="checked"
      class="hide checkbox-input"
      @change="$emit('change', $event)"
    />
    <span class="checkbox-label">
      <slot name="label"></slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Checkbox',
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

.checkbox {
  position: relative;
  display: block;
}
.checkbox-label {
  position: relative;
  display: block;
  padding-left: 28px;
  cursor: pointer;
  color: $text-muted;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    pointer-events: none;
  }
  &:before {
    border: 1px solid $text-muted;
    border-radius: 3px;
  }
  &:after {
    opacity: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 10px 11px;
    background-image: url(escape-svg(
      'data:image/svg+xml,<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.29874L5.23192 9.92739L9.46384 1" stroke="#EEECEC"/></svg>'
    ));
  }
}
.checkbox-input:checked {
  ~ {
    .checkbox-label {
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
