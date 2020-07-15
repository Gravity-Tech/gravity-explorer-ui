<template>
  <social-link
    class="social-link-telegram"
    image="/img/icons/socials/telegram.svg"
    :href="href"
  >
    <slot></slot>
  </social-link>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialLink from '~/components/SocialLink.vue'

export default Vue.extend({
  name: 'SocialLinkTelegram',
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

.social-link-telegram {
  @include make-social-link($social-link-telegram-background);
}
</style>
