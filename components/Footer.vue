<template>
  <footer class="footer">
    <hr />
    <div class="container">
      <div class="footer-nav"></div>
    </div>
    <hr />
    <div class="container">
      <div class="footer-socials">
        <btn tag="a" href="/" class="footer-socials-btn footer-socials-btn--md">
          <icon image="/img/icons/ventuary-lab.svg"></icon>
        </btn>
        <a
          v-for="(social, key) in socials"
          :key="key"
          class="footer-social"
          :href="social.link"
          target="_blank"
        >
          <icon :image="`/img/icons/socials/${social.icon}.svg`"></icon>
        </a>
      </div>
      <div class="footer-contacts">
        <btn tag="a" href="/" class="footer-socials-btn">
          <icon image="/img/icons/ventuary-lab.svg"></icon>
        </btn>
        <a class="text-green" href="mailto:oracle@gravity.tech">
          oracle@gravity.tech
        </a>
      </div>
      <div class="footer-copyright">
        &copy; 2020 Gravity Protocol.
        <span class="footer-copyright-lg"
          >Oracles and Cross-chain Communication Network</span
        >
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
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: { Btn, Icon },
  data: () => ({
    socials: [
      {
        icon: 'facebook',
        link: '/',
      },
      {
        icon: 'medium',
        link: '/',
      },
      {
        icon: 'twitter',
        link: '/',
      },
      {
        icon: 'linkedin',
        link: '/',
      },
      {
        icon: 'telegram',
        link: '/',
      },
      {
        icon: 'discord',
        link: '/',
      },
      {
        icon: 'reddit',
        link: '/',
      },
      {
        icon: 'github',
        link: '/',
      },
    ],
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
.footer hr {
  height: 1px;
  width: 100%;
  border: none;
  background: #2e3148;
  margin: 0;
  padding: 0;
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
.footer-copyright-lg {
  display: none;
  @include media-breakpoint-up(sm) {
    display: inline;
  }
}
.footer-nav {
  height: 118px;
}
.footer-socials,
.footer-contacts {
  padding-bottom: 34px;
  @include media-breakpoint-up(md) {
    padding-bottom: 43px;
  }
}
.footer-socials {
  padding-top: 27px;
  display: flex;
  align-items: center;
  @include media-breakpoint-up(md) {
    padding-top: 47px;
  }
}
.footer-social {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  min-width: 42px;
  opacity: 0.65;
  transition: $btn-transition;
  i {
    height: 32px;
    width: 32px;
  }
  + .footer-social {
    margin-left: auto;
  }
  &:hover {
    opacity: 1;
  }
}
.footer-socials-btn {
  margin-right: 66px;
  i {
    top: 3px;
    width: 129px;
    height: 17px;
  }
}
.footer-contacts {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include media-breakpoint-up(md) {
    display: none;
  }
}
.footer-socials-btn--md {
  display: none;
  @include media-breakpoint-up(md) {
    display: block;
  }
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
