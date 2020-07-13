<template>
  <social-link
    class="social-link-twitter"
    image="/img/icons/socials/twitter.svg"
    :href="href"
  >
    <slot></slot>
  </social-link>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/components/SocialLink.vue'

export default Vue.extend({
  name: 'SocialLinkTwitter',
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

.social-link-twitter {
  @include make-social-link($social-link-twitter-background);
}
</style>
