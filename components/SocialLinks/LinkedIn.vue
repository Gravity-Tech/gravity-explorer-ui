<template>
  <social-link
    class="social-link-linked-in"
    image="/img/icons/socials/linked-in.svg"
    :href="href"
  >
    <slot></slot>
  </social-link>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/components/SocialLink.vue'

export default Vue.extend({
  name: 'SocialLinkLinkedIn',
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

.social-link-linked-in {
  @include make-social-link($social-link-linked-in-background);
}
</style>
