<template>
  <social-link
    class="social-link-facebook"
    image="/img/icons/socials/facebook.svg"
    :href="href"
  >
    <slot></slot>
  </social-link>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/components/SocialLink.vue'

export default Vue.extend({
  name: 'SocialLinkFacebook',
  components: {
    SocialLink,
  },
  props: {
    href: {
      type: String,
      default: () => '#',
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../../assets/scss/import';

.social-link-facebook {
  @include make-social-link($social-link-facebook-background);
}
</style>
