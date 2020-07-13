<template>
  <a class="social-link" :href="href" target="_blank">
    <icon :image="image"><slot></slot></icon>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  name: 'SocialLink',
  components: {
    Icon,
  },
  props: {
    href: {
      type: String,
      default: () => '#',
      required: false,
    },
    image: {
      type: String,
      default: () => '',
      required: false,
    },
  },
})
</script>

<style lang="scss">
$social-link-width: 18px;
.social-link {
  width: 26px;
  min-width: 26px;
  height: 26px;
  display: inline-block;
  border-radius: 50%;
  .icon {
    width: $social-link-width;
    height: $social-link-width;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
