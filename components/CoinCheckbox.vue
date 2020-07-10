<template>
  <label class="coin-checkbox">
    <input
      :type="type"
      :name="name"
      :checked="checked"
      class="hide coin-checkbox-input"
      @change="$emit('change', $event)"
    />

    <span class="coin-checkbox-icon-bg"></span>
    <span class="coin-checkbox-bg"></span>

    <span class="coin-checkbox-icon">
      <icon :image="icon"></icon>
    </span>
    <span class="coin-checkbox-title">{{ title }}</span>
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'CoinCheckbox',
  components: {
    Icon,
  },
  props: {
    type: {
      type: String,
      default: () => 'radio',
      required: false,
    },
    checked: {
      type: Boolean,
      default: () => false,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type
$coin-checkbox-transition: 0.3s;

.coin-checkbox {
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 0;
  align-items: center;
  justify-content: flex-end;
  background: #323652;
  border-radius: 6px;
  height: 103px;
  cursor: pointer;

  + .coin-checkbox {
    margin-top: 24px;
  }

  .icon {
    width: 38px;
    height: 38px;
    z-index: 2;
  }
}
.coin-checkbox-bg {
  z-index: 1;
}

.coin-checkbox-bg,
.coin-checkbox-icon-bg,
.coin-checkbox-icon {
  display: block;
  width: 66px;
  height: 66px;
  position: absolute;
  top: calc(50% - 33px);
  right: calc(50% + 11px);
  transition: $coin-checkbox-transition;
}

.coin-checkbox-icon {
  z-index: 2;
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.coin-checkbox-bg,
.coin-checkbox-icon-bg {
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: $coin-checkbox-transition;
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

.coin-checkbox-title {
  display: block;
  flex: 0 0 50%;
  max-width: 50%;
  font-size: 13px;
  line-height: lh(13px, 19px);
  text-transform: uppercase;
  z-index: 3;
}

.coin-checkbox-input:checked {
  ~ .coin-checkbox-icon-bg {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transform: translateY(0);

    &:before,
    &:after {
      border-radius: 6px;
    }
  }
}
</style>
