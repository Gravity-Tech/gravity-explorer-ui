<template>
  <div class="card" :class="className">
    <div v-if="$slots.rating" class="card-rating">
      <slot name="rating"></slot>
      <icon
        v-if="isCrown"
        class="card-crown"
        image="/img/icons/сonsul.svg"
      ></icon>
    </div>
    <div class="card-bg"></div>
    <div class="card-body">
      <div v-if="isAvatar" class="card-avatar" :lazy-background="img"></div>
      <div v-if="isLogo" class="card-logo" :lazy-background="img"></div>
      <div v-if="isContent" class="card-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'Card',
  components: {
    Icon,
  },
  props: {
    typeImg: {
      type: String,
      default: () => 'avatar',
      required: false,
    },
    size: {
      type: String,
      default: () => '',
      required: false,
    },
    isCrown: {
      type: Boolean,
      default: () => false,
      required: false,
    },
    isContent: {
      type: Boolean,
      default: () => true,
      required: false,
    },
    img: {
      type: String,
      default: () => '',
      required: false,
    },
  },
  computed: {
    className() {
      return {
        'card-slim': this.size === 'slim',
      }
    },
    isAvatar() {
      return this.img && this.typeImg === 'avatar'
    },
    isLogo() {
      return this.img && this.typeImg === 'logo'
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';
// stylelint-disable selector-no-qualifying-type

.card {
  width: 100%;
  flex: 0 0 247px;
  max-width: 247px;
  position: relative;
  padding: 30px;
}
.card-rating {
  width: 47px;
  height: 47px;
  position: absolute;
  left: 0;
  top: -18px;
  border: 5px dashed #00e6b3;
  border-radius: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: $green;
}
.card-bg {
  &,
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 11px;
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
.card-body {
  position: relative;
  z-index: 1;
}
.card-avatar,
.card-logo {
  background-repeat: no-repeat;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
}
.card-avatar {
  width: 100%;
  flex: 0 0 77px;
  max-width: 77px;
  height: 77px;
  border-radius: 50%;
  background-size: cover;
  margin-top: 10px;
}
.card-logo {
  background-size: contain;
  height: 50px;
}
.card-content {
  text-align: center;
  font-size: 15px;
  margin-top: 25px;
  small {
    font-size: 13px;
  }
}
.card-crown {
  position: absolute;
  right: -35px;
  top: 0;
  width: 24px;
  height: 24px;
}
.card-slim {
  padding: 20px;
  .card-rating {
    left: -10px;
  }
}
</style>
