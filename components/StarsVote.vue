<template>
  <div class="stars-vote">
    <div
      v-for="i in 10"
      :key="i"
      class="stars-vote-star"
      @click="$emit('input', i)"
    >
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1919 17.4962L11.9592 17.3739L11.7265 17.4962L5.59382 20.7204L6.76506 13.8915L6.80949 13.6324L6.62126 13.4489L1.6598 8.61271L8.51637 7.6164L8.7765 7.5786L8.89284 7.34288L11.9592 1.12978L15.0255 7.34288L15.1419 7.5786L15.402 7.6164L22.2586 8.61271L17.2971 13.4489L17.1089 13.6324L17.1533 13.8915L18.3246 20.7204L12.1919 17.4962Z"
          :fill="value >= i ? '#44D7B6' : 'transparent'"
          :stroke="`url(#${id})`"
        />
      </svg>
    </div>
    <svg
      class="hide"
      width="0"
      height="0"
      viewBox="0 0 0 0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          :id="id"
          x1="-12.3096"
          y1="7.31059"
          x2="10.0909"
          y2="28.1505"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6000FF" stop-opacity="0.15" />
          <stop offset="0.343724" stop-color="#4200C0" />
          <stop offset="1" stop-color="#FF5E00" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'StarsVote',
  props: {
    value: {
      type: [Number, String],
      default: 0,
      required: false,
    },
  },
  data: () => ({
    id: 'stars-vote-gradient',
  }),
  beforeMount() {
    this.id = 'stars-vote-gradient-' + this.getUniqueId()
  },
  methods: {
    getUniqueId() {
      return String(Math.floor(Math.random() * 10e10))
    },
  },
}
</script>

<style lang="scss">
.stars-vote {
  display: flex;
  justify-content: space-between;
}
.stars-vote-star {
  width: 100%;
  flex: 0 0 24px;
  max-width: 24px;
  height: 22px;
  cursor: pointer;
}
</style>
