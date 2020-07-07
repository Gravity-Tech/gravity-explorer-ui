<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-nav"></div>
      <div class="footer-socials"></div>
      <div class="footer-copyright">
        &copy; 2020 Gravity Protocol. Oracles and Cross-chain Communication
        Network
      </div>
    </div>
    <div v-if="isCookiesBox" class="footer-cookies" :style="getCookiesStyle">
      <div class="footer-cookies-wrapper">
        <div class="container">
          <div ref="cookiesBox" class="footer-cookies-box">
            <div>
              We use cookies on our website. By continuing to use the site, or
              by clicking “I agree”, you consent to the use of cookies. For more
              info click here.
            </div>
            <btn
              class="btn-outline-primary footer-cookies-btn"
              @click="hideCookiesBox"
              >I agree</btn
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'

export default Vue.extend({
  components: { Btn },
  data: () => ({
    isCookiesBox: true,
    heightCookiesBox: 100,
    instanceHeightCookiesBox: undefined,
  }),
  computed: {
    getCookiesStyle() {
      return {
        height: this.heightCookiesBox + 30 + 'px',
      }
    },
  },
  mounted() {
    this.calcHeightCookiesBox()
    this.bindHeightCookiesBox()
  },
  beforeDestroy() {
    this.unbindHeightCookiesBox()
  },
  methods: {
    hideCookiesBox() {
      this.isCookiesBox = false
      this.unbindHeightCookiesBox()
    },
    bindHeightCookiesBox() {
      if (this.isCookiesBox && typeof window !== 'undefined') {
        window.addEventListener('resize', this.calcHeightCookiesBox)
      }
    },
    unbindHeightCookiesBox() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.calcHeightCookiesBox)
      }
    },
    calcHeightCookiesBox() {
      if (this.isCookiesBox) {
        clearTimeout(this.instanceHeightCookiesBox)
        // @ts-ignore: Type 'Timeout' is not assignable to type 'undefined'.
        this.instanceHeightCookiesBox = setTimeout(() => {
          if (this.$refs.cookiesBox) {
            // @ts-ignore:  Property 'getBoundingClientRect' does not exist on type 'Element | Element[] | Vue | Vue[]'
            this.heightCookiesBox = this.$refs.cookiesBox.getBoundingClientRect().height
          }
        }, 1000)
      }
    },
  },
})
</script>

<style lang="scss">
.footer-cookies {
  min-height: 100px;
}
.footer-cookies-wrapper {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
}
.footer-cookies-box {
  background: $body-bg;
  border: 1px solid #2e3148;
  min-height: 70px;
  padding: 15px;
  @include media-breakpoint-up(sm) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.footer-nav {
  height: 118px;
}
.footer-socials {
  padding-top: 47px;
  padding-bottom: 43px;
}
.footer-copyright {
  padding-bottom: 38px;
}
.footer-cookies-btn {
  margin-top: 19px;
  @include media-breakpoint-up(sm) {
    margin-top: 0;
    margin-left: 33px;
  }
}
</style>
