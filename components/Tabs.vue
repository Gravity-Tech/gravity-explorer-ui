<template>
  <ul class="tabs">
    <li v-for="(item, index) in items" :key="index">
      <nuxt-link :to="item.to">
        {{ item.label }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Tabs',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';

.tabs {
  display: flex;
  margin-left: -14px;
  margin-right: -14px;
  list-style: none;
  padding-left: 0;
  margin-bottom: 24px;
  padding-top: 9px;
  li {
    padding-left: 14px;
    padding-right: 14px;
  }
  a {
    text-decoration: none !important;
    font-family: 'Orbitron';
    color: $text-muted;
    letter-spacing: 0.636364px;
    font-size: 14px;
    line-height: lh(14px, 18px);
    padding-bottom: 5px;
    border-bottom: 1px solid transparent;
    &:hover {
      border-color: $text-muted;
    }
    &.nuxt-link-exact-active {
      color: #d8d8d8;
      border-color: #d8d8d8;
    }
  }
}
</style>
