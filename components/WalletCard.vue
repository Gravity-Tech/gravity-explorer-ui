<template>
  <label class="wallet-card">
    <span v-if="icon" class="wallet-card-icon">
      <icon :image="icon"></icon>
    </span>
    <span class="wallet-card-title"><slot></slot></span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'WalletCard',
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

.wallet-card {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  background: #323652;
  border-radius: 6px;
  height: 103px;

  + .wallet-card {
    margin-top: 24px;
  }

  .icon {
    width: 38px;
    height: 38px;
    z-index: 2;
  }
}

.wallet-card-icon {
  display: block;
  flex: 0 0 66px;
  max-width: 66px;
  width: 100%;
  height: 66px;
  position: relative;
  margin-right: 13px;
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

.wallet-card-title {
  display: block;
  font-size: 13px;
  line-height: lh(13px, 19px);
}
</style>
