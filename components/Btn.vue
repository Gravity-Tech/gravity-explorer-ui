<template>
  <component :is="tag" class="btn" :to="to" @click="$emit('click', $event)">
    <b><slot></slot></b>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Btn',
  props: {
    tag: {
      type: String,
      default: () => 'button',
      required: false,
    },
    to: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type

//
// Base styles
//

.btn {
  position: relative;
  display: inline-block;
  font-family: $btn-font-family;
  font-weight: $btn-font-weight;
  font-size: $btn-font-size;
  color: $btn-color;
  text-align: center;
  text-decoration: none;
  white-space: $btn-white-space;
  vertical-align: middle;
  user-select: none;
  background-color: $btn-bg-color;
  transition: $btn-transition;
  border-radius: $btn-border-radius;
  overflow: hidden;
  @include make-col-auto();

  @include btn-size(
    $btn-height,
    $btn-line-height,
    $btn-border-width,
    $btn-font-size,
    $btn-padding-x
  );
  border-color: $btn-bg-color;

  &:hover {
    color: $btn-color;
    text-decoration: none;
    background-color: $btn-bg-color-hover;
    border-color: $btn-bg-color-hover;
  }

  &:focus,
  &.focus {
    outline: 0;
    box-shadow: none;
  }

  // Disabled comes first so active can properly restyle
  &.disabled,
  &:disabled {
    opacity: $btn-disabled-opacity;
    box-shadow: none;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  b {
    position: relative;
    font-weight: 400;
    z-index: 4;
  }
}

// Future-proof disabling of clicks on `<a>` elements
a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary,
.btn-secondary,
.btn-outline-primary {
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: $table-border-width;
    top: $table-border-width;
    transition: $btn-transition;
    border-radius: $btn-border-radius;
    width: calc(100% - #{$table-border-width * 2});
    height: calc(100% - #{$table-border-width * 2});
  }
  &:after {
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
}

.btn-primary {
  color: #d8d8d8;
  background: #878ea1;
  &:before {
    background: linear-gradient(
      357.9deg,
      #262940 -63.33%,
      #414562 26.56%,
      #23263e 147.98%
    );
  }
  &:after {
    background: #eeecec;
  }
  &:hover {
    color: #000000;
    background: #eeecec;
  }
}

.btn-secondary {
  color: #44d7b6;
  background: #878ea1;
  &:before {
    background: linear-gradient(
      357.02deg,
      #262940 -63.33%,
      #414562 26.56%,
      #23263e 147.98%
    );
  }
  &:after {
    background: #44d7b6;
  }
  &:hover {
    color: #000000;
    background: #44d7b6;
  }
}

.btn-outline-primary {
  color: #d8d8d8;
  background: #878ea1;
  &:before {
    background: $body-bg;
  }
  &:after {
    background: #eeecec;
  }
  &:hover {
    color: #000000;
    background: #eeecec;
  }
}

//
// Block button
//

.btn-block {
  display: block;
  width: 100%;

  // Vertically space out multiple block buttons
  + .btn-block {
    margin-top: $btn-block-spacing-y;
  }
}

// Specificity overrides
input[type='submit'],
input[type='reset'],
input[type='button'] {
  &.btn-block {
    width: 100%;
  }
}
</style>
