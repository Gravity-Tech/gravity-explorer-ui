<template>
  <div class="node-info">
    <div class="node-info-h1">Node Info</div>
    <div class="row" style="align-items: center; margin-bottom: 26px;">
      <div class="col-auto" style="font-size: 13px; margin-right: auto;">
        Deposit Balance:
        <span class="text-green">~1.1 ETH | $261.39</span>
        <span class="text-danger">| Locked until 25.02</span>
      </div>
      <div class="col-auto">
        <btn class="btn-secondary">Deposit management</btn>
      </div>
    </div>
    <div class="node-info-card">
      <div class="row">
        <div class="col-auto node-info-card-logo">
          <card
            type-img="logo"
            img="/img/card/example-logo.svg"
            :is-crown="true"
            :is-content="false"
            size="slim"
          >
            <template v-slot:rating>
              {{ rating }}
            </template>
          </card>
          <div class="text-center" style="margin-top: 16px;">
            <span class="text-muted">Joined:</span>
            27.05.2020
          </div>
        </div>
        <div class="col node-info-card-content">
          <div class="node-info-card-name">
            <span class="text-muted">Name:</span>
            LinkPool Node 1
          </div>
          <div class="node-info-card-description">
            LinkPool is a leading Gravity node service provider withthe goal of
            providing tools and services that benefit the Gravity ecosystem.
          </div>
          <div class="row node-info-card-actions">
            <div class="col-auto">
              <btn class="btn-primary">Edit Info</btn>
              <btn class="btn-danger" style="margin-left: 16px;">
                Deactivate node
              </btn>
            </div>
            <div class="col-auto node-info-card-contacts">
              <div v-if="website && website.name">
                <span class="text-muted">Website:</span>
                <a
                  v-if="website.href"
                  :href="website.href"
                  target="_blank"
                  class="link-invert"
                  v-text="website.name"
                ></a>
                <span v-else v-text="website.name"></span>
                |
                <span class="text-muted" style="margin-right: 10px;"
                  >Socials:</span
                >
                <social-link-telegram href="/"></social-link-telegram>
                <social-link-facebook href="/"></social-link-facebook>
                <social-link-linked-in href="/"></social-link-linked-in>
                <social-link-twitter href="/"></social-link-twitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'
import Card from '~/components/Card.vue'
import SocialLinkTelegram from '~/components/SocialLinks/Telegram.vue'
import SocialLinkFacebook from '~/components/SocialLinks/Facebook.vue'
import SocialLinkLinkedIn from '~/components/SocialLinks/LinkedIn.vue'
import SocialLinkTwitter from '~/components/SocialLinks/Twitter.vue'

export default Vue.extend({
  name: 'NodeInfo',
  components: {
    Btn,
    Card,
    SocialLinkTelegram,
    SocialLinkFacebook,
    SocialLinkLinkedIn,
    SocialLinkTwitter,
  },
  props: {
    rating: {
      type: String,
      default: () => '',
      required: false,
    },
    website: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },
})
</script>

<style lang="scss">
@import '../assets/scss/import';

.node-info {
  margin-bottom: 38px;
}
.node-info-h1 {
  font-size: 17px;
  line-height: lh(17px, 21px);
  letter-spacing: 0.772727px;
  margin-bottom: 6px;
}
.node-info-card {
  background: #23263f;
  border-radius: 6px;
  padding: 50px 32px 43px 32px;
  @include media-breakpoint-up(lg) {
    padding: 50px 60px 33px 60px;
  }
}
.node-info-card-logo {
  $node-info-card-logo-width: 247px + $grid-gutter-width;
  width: 100%;
  max-width: $node-info-card-logo-width;
  flex: 0 0 $node-info-card-logo-width;
}
.node-info-card-content {
  padding-left: 26px - $grid-gutter-width / 2;
  line-height: lh(14px, 21px);
  @include media-breakpoint-up(lg) {
    padding-left: 50px - $grid-gutter-width / 2;
  }
}
.node-info-card-name {
  margin-bottom: 14px;
}
.node-info-card-description {
  max-width: 384px;
  margin-bottom: 24px;
  font-weight: 300;
}
.node-info-card-actions {
  align-items: center;
}
.node-info-card-contacts {
  padding-left: 74px - $grid-gutter-width / 2;
  .social-link {
    margin-right: 0;
    @include media-breakpoint-up(lg) {
      margin-right: 18px;
    }
  }
  @include media-breakpoint-down(lg) {
    order: -1;
    padding-left: $grid-gutter-width / 2;
    @include make-col(1, 1);
    margin-bottom: 28px;
  }
}
</style>
