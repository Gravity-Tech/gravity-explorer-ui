<template>
  <table class="table-list">
    <caption v-if="caption">
      {{
        caption
      }}
    </caption>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TableList',
  props: {
    caption: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';

.table-list {
  width: 100%;
  margin-bottom: $spacer;
  color: $table-color;
  background-color: $table-bg; // Reset for nesting within parents with `background-color`.

  th,
  td {
    padding: $table-cell-padding;
    vertical-align: top;
    border-top: $table-border-width solid $table-border-color;
    font-size: 13px;
    line-height: lh(13px, 19px);
    &.small {
      font-size: 11px;
      line-height: lh(11px, 14px);
    }
  }

  tbody tr {
    &:first-child {
      th,
      td {
        border-top: none;
      }
    }
    th,
    td {
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
        text-align: right;
      }
    }
  }

  caption {
    font-weight: 600;
    font-size: 15px;
    line-height: lh(15px, 22px);
    caption-side: top;
  }
}
</style>
