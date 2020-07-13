<template>
  <table-avatar class="table-avatar-icon"><slot></slot></table-avatar>
</template>

<script lang="ts">
import Vue from 'vue'
import TableAvatar from '~/components/TableAvatar.vue'

export default Vue.extend({
  name: 'TableAvatarIcon',
  components: {
    TableAvatar,
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
//
// Basic Bootstrap table
//
.table-avatar.table-avatar-icon {
  background-color: #3e446b;
  .icon {
    left: 5px;
    top: 5px;
    width: 18px;
    height: 18px;
  }
}
</style>
