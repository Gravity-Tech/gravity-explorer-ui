<template>
  <div class="coin-card-logo">
    <div class="coin-card-logo-icon">
      <icon :image="logo"></icon>
    </div>
    <div class="coin-card-logo-name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'CoinCardLogo',
  components: {
    Icon,
  },
  props: {
    logo: {
      type: String,
      default: '',
      required: false,
    },
    name: {
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
.coin-card-logo {
  padding: 11px 20px 11px 26px;
  font-size: 13px;
  display: flex;
  align-items: center;
  background: #323652;
  border-radius: 6px;
  justify-content: center;
}
.coin-card-logo-icon {
  position: relative;
  width: 67px;
  height: 67px;
  margin-right: 9px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

  i {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    z-index: 2;
  }
}
</style>
