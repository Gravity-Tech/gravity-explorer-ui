<template>
  <div class="btn-checkbox-inline">
    <label class="form-control-label"><slot name="label"></slot></label>
    <div class="btn-checkbox-inline-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BtnCheckboxInline',
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type
.btn-checkbox-inline {
  width: 100%;
  padding-top: 5px;
  display: flex;
  align-items: center;
  > .form-control-label {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
    margin-bottom: 5px;
  }
}
.btn-checkbox-inline-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  > .btn-checkbox {
    margin-left: 10px;
    margin-bottom: 5px;
  }
}
</style>
