<template>
  <my-subscriptions-list></my-subscriptions-list>
</template>

<script lang="ts">
import Vue from 'vue'
import MySubscriptionsList from '~/components/MySubscriptionsList.vue'

export default Vue.extend({
  components: {
    MySubscriptionsList,
  },
})
</script>

<style></style>
