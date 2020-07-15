<template>
  <div class="like-card">
    <icon class="like-card-icon" image="/img/card/like.svg"></icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'LikeCard',
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type

.like-card {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  height: 162px;
  + .like-card {
    margin-top: 24px;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    transition: 0.3s;
  }

  &:before {
    background: linear-gradient(
      145deg,
      rgba(96, 0, 255, 0.15) 0%,
      #4200c0 34.37%,
      #ff5e00 100%
    );
  }

  &:after {
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: linear-gradient(193deg, #2e3356 -28.01%, #10111a 90.88%);
  }
}

.like-card-icon {
  display: block;
  height: 116px;
  flex: 0 0 123.92px;
  max-width: 123.92px;
  width: 100%;
  position: relative;
  z-index: 2;
}
</style>
