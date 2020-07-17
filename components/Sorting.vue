<template>
  <div class="sorting" :data-sorting="dir" @click="$emit('click', $event)">
    <slot></slot>
    <div class="sorting-triangle"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sorting',
  props: {
    dir: {
      type: String,
      default: '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';

.sorting {
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.sorting-triangle {
  position: absolute;
  right: -15px;
  top: 2px;
  width: 10px;
  height: 15px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
  }
  &:before {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-bottom: 6px solid #7a81b4;
  }
  &:after {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 6px solid #7a81b4;
    top: 8px;
  }
}
.sorting {
  &[data-sorting='asc'] {
    .sorting-triangle {
      &:before {
        border-bottom-color: #ff8e1e;
      }
    }
  }
  &[data-sorting='desc'] {
    .sorting-triangle {
      &:after {
        border-top-color: #ff8e1e;
      }
    }
  }
}
</style>
