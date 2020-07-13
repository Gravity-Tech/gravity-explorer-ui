<template>
  <table class="table">
    <thead :style="`padding-right: ${scrollbarWidth}px;`">
      <slot name="head"></slot>
    </thead>
    <tbody>
      <slot name="body"></slot>
      <tr v-if="loading">
        <td class="table-loading" colspan="100%">
          Loading...
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Table',
  props: {
    loading: {
      type: Boolean,
      default: () => false,
      required: false,
    },
  },
  data: () => ({
    scrollbarWidth: 10,
  }),
  mounted() {
    this.scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
//
// Basic Bootstrap table
//

.table {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 100%;
  margin-bottom: 24px;
  color: $table-color;
  background-color: $table-thead-bg;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  max-height: $table-max-height;
  border-radius: $table-border-radius;

  th,
  td {
    padding: $table-cell-padding;
    vertical-align: top;
    border-top: $table-border-width solid $table-border-color;
  }

  thead th {
    font-weight: 400;
    background-color: $table-thead-bg;
    vertical-align: bottom;
    border-top: 0;
    border-bottom: $table-border-width solid $body-bg;
  }

  thead tr:nth-child(1) th {
    position: sticky;
    top: 0;
    z-index: 10;
    vertical-align: top;
  }
  thead {
    flex: 0 0 auto;
  }
  tbody {
    flex: 1 1 auto;
    display: block;
    overflow-y: auto;
    overflow-x: hidden;
    td,
    th {
      background-color: $table-bg;
      vertical-align: middle;
    }
    tr {
      &:first-child {
        td,
        th {
          border-top: 0;
        }
      }
    }
  }

  tr {
    width: 100%;
    display: table;
    table-layout: fixed;
  }
}
.table-loading {
  position: relative;
  text-align: center;
  pointer-events: none;
  color: transparent !important;

  &:after,
  &:before {
    animation: spinAround 500ms infinite linear;
    border-radius: 50%;
    border: 2px solid transparent;
    border-bottom-color: white;
    content: '';
    display: block;
    height: 1em;
    width: 1em;
    position: absolute;
    left: calc(50% - (1em / 2));
    top: calc(50% - (1em / 2));
  }
  &:before {
    border: 2px solid transparent;
    border-top-color: white;
  }
}
</style>
