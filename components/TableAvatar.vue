<template>
  <div class="table-avatar">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TableAvatar',
})
</script>

<style lang="scss">
@import '../assets/scss/import';
//
// Basic Bootstrap table
//
.table-avatar {
  position: relative;
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-top: -18px;
  top: 8px;
  margin-right: 4px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #3e446b;
  .icon {
    width: 100%;
    height: 100%;
  }
}
</style>
