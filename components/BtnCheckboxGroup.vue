<template>
  <div class="btn-checkbox-group">
    <label><slot name="label"></slot></label>
    <div class="btn-checkbox-group-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BtnCheckboxGroup',
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type
.btn-checkbox-group {
  > label {
    display: block;
  }
}
.btn-checkbox-group-wrapper {
  display: flex;
  flex-wrap: wrap;
  > .btn-checkbox {
    width: 100%;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    .btn-checkbox-label {
      border-radius: 0;
    }
    &:first-child {
      .btn-checkbox-label {
        border-radius: 6px 0 0 6px;
      }
    }
    &:last-child {
      .btn-checkbox-label {
        border-radius: 0 6px 6px 0;
      }
    }
    &:not(:last-child) {
      .btn-checkbox-label {
        border-right: none;
      }
    }
  }
}
</style>
