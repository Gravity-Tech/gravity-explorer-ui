<template>
  <ul class="block-list">
    <li v-for="(item, index) in items" :key="index">
      <span>{{ item.name }}</span>
      <span class="text-green">{{ item.value }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BlockList',
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

.block-list {
  background: #323652;
  border-radius: 6px;
  font-size: 13px;
  line-height: lh(13px, 19px);
  list-style: none;
  padding: 19px 20px;
  margin-bottom: 30px;
  li + li {
    margin-top: 12px;
  }
}
</style>
