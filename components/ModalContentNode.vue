<template>
  <modal-content class="modal-node" :show-footer="showFooter">
    <template v-slot:head>
      <slot name="head"></slot>
    </template>

    <template v-slot:body>
      <div class="row no-gutters">
        <card type-img="logo" :img="cardAvatar" :is-crown="true">
          <template v-if="rating" v-slot:rating>
            {{ rating }}
          </template>
          <div class="small">
            <div v-if="cardDate" style="margin-bottom: 12px;">
              <span class="text-muted">Joined:</span>
              {{ cardDate }}
            </div>
            <div v-if="cardDeposit">
              <span class="text-muted">Deposit:</span>
              <span class="text-green">{{ cardDeposit }}</span>
            </div>
          </div>
        </card>
        <div class="modal-node-data">
          <ul v-if="data.name || data.address">
            <li v-if="data.name">
              <span class="text-muted">Name:</span> {{ data.name }}
            </li>
            <li v-if="data.address">
              <span class="text-muted">Address:</span> {{ data.address }}
            </li>
          </ul>
          <div v-if="data.description" class="modal-node-description">
            {{ data.description }}
          </div>
          <div
            v-if="data.website && data.website.name"
            class="modal-node-contacts"
          >
            <span class="text-muted">Website:</span>
            <a
              v-if="data.website.href"
              :href="data.website.href"
              target="_blank"
              v-text="data.website.name"
            ></a>
            <span v-else v-text="data.website.name"></span>
            |
            <span class="text-muted" style="margin-right: 8px;">Socials:</span>
            <social-link-telegram href="/"></social-link-telegram>
            <social-link-facebook href="/"></social-link-facebook>
            <social-link-linked-in href="/"></social-link-linked-in>
            <social-link-twitter href="/"></social-link-twitter>
          </div>
          <btn class="modal-node-btn btn-primary">
            Vote
          </btn>
        </div>
      </div>
    </template>

    <template v-if="nodesList.length" v-slot:footer>
      <table-list :caption="caption">
        <template v-slot:body>
          <tr v-for="(item, index) in nodesList" :key="index">
            <td>{{ item.name }}</td>
            <td class="small" style="width: 40%;">{{ item.description }}</td>
            <td>{{ item.type }}</td>
            <td class="text-green">{{ item.count }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </template>
      </table-list>
    </template>
  </modal-content>
</template>

<script lang="ts">
import Vue from 'vue'
import ModalContent from '~/components/ModalContent.vue'
import Card from '~/components/Card.vue'
import TableList from '~/components/TableList.vue'
import Btn from '~/components/Btn.vue'
import SocialLinkTelegram from '~/components/SocialLinks/Telegram.vue'
import SocialLinkFacebook from '~/components/SocialLinks/Facebook.vue'
import SocialLinkLinkedIn from '~/components/SocialLinks/LinkedIn.vue'
import SocialLinkTwitter from '~/components/SocialLinks/Twitter.vue'

export default Vue.extend({
  name: 'ModalContentNode',
  components: {
    ModalContent,
    Card,
    TableList,
    Btn,
    SocialLinkTelegram,
    SocialLinkFacebook,
    SocialLinkLinkedIn,
    SocialLinkTwitter,
  },
  props: {
    modalHead: {
      type: String,
      default: () => '',
      required: false,
    },
    data: {
      type: Object,
      default: () => {},
      required: false,
    },
    caption: {
      type: String,
      default: () => '',
      required: false,
    },
    rating: {
      type: String,
      default: () => '',
      required: false,
    },
    cardDate: {
      type: String,
      default: () => '',
      required: false,
    },
    cardDeposit: {
      type: String,
      default: () => '',
      required: false,
    },
    cardAvatar: {
      type: String,
      default: () => '',
      required: false,
    },
    nodesList: {
      type: Array,
      default: () => [],
      required: false,
    },
    showFooter: {
      type: Boolean,
      default: () => true,
      required: false,
    },
  },
})
</script>

<style lang="scss">
.modal-node {
  .social-link {
    margin-right: 6px;
    margin-bottom: 4px;
  }
}
.modal-node-data {
  padding-left: 42px;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
  ul {
    font-size: 13px;
    line-height: lh(13px, 19px);
    list-style: none;
    padding-left: 0;
    margin-bottom: 19px;
    li {
      display: block;
      margin-bottom: 9px;
    }
  }
}
.modal-node-description {
  margin-bottom: 27px;
}
.modal-node-contacts {
  margin-bottom: 35px;
}
.modal-node-btn {
  min-width: 200px;
}
</style>
