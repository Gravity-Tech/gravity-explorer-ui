<template>
  <footer class="footer">
    <hr />
    <div class="container">
      <div class="footer-nav">
        <hr />
        <div class="footer-nav-logo-wrapper">
          <nuxt-link
            to="/"
            class="footer-nav-logo responsive responsive-bsizer"
          >
            <img class="responsive-item" src="/img/logo.svg" alt="Logo" />
          </nuxt-link>
        </div>
        <div class="footer-nav-item">
          <a class="link-invert" href="/">Docs</a>
        </div>
        <div class="footer-nav-item">
          <a class="link-invert" href="/">Whitepaper</a>
        </div>
        <div class="footer-nav-item">
          <a class="link-invert" href="/">FAQ</a>
        </div>
        <div class="footer-nav-item">
          <a class="link-invert" href="/">Brand Assets</a>
        </div>
        <div class="footer-nav-item"><a href="/">Privacy policy</a></div>
        <div class="footer-nav-item"><a href="/">Terms & Conditions</a></div>
        <div class="footer-nav-item footer-contacts-email">
          <a href="mailto:oracle@gravity.tech" class="text-green">
            oracle@gravity.tech
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="footer-socials">
        <btn tag="a" href="/" class="footer-socials-btn">
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
        <a
          class="text-green footer-contacts-email"
          href="mailto:oracle@gravity.tech"
        >
          oracle@gravity.tech
        </a>
      </div>
      <div class="footer-copyright">
        &copy; {{ new Date().getFullYear() }} Gravity Protocol.
        <span class="footer-copyright-lg"
          >Oracles and Cross-chain Communication Network</span
        >
      </div>
    </div>
    <div class="footer-cookies" :style="getCookiesStyle">
      <div class="footer-cookies-wrapper" :style="getWrapperCookiesStyle">
        <div class="container">
          <div ref="cookiesBox" class="footer-cookies-box">
            <div>
              We use cookies on our website. By continuing to use the site, or
              by clicking “I&nbsp;agree”, you consent to the use of cookies. For
              more info click here.
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
        icon: 'linked-in',
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
    heightCookiesBox: 100,
    isCookiesBox: false,
    instanceHeightCookiesBox: undefined,
  }),
  computed: {
    getWrapperCookiesStyle() {
      return {
        bottom: this.isCookiesBox ? '30px' : '-100%',
      }
    },
    getCookiesStyle() {
      return {
        height: this.isCookiesBox ? this.heightCookiesBox + 30 + 'px' : '0px',
        'min-height': this.isCookiesBox ? '100px' : '0px',
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.isCookiesBox = !localStorage.getItem('IS_AGREE_COOKIES')
      this.calcHeightCookiesBox()
      this.bindHeightCookiesBox()
    }, 2000)
  },
  beforeDestroy() {
    this.unbindHeightCookiesBox()
  },
  methods: {
    hideCookiesBox() {
      this.isCookiesBox = false
      localStorage.setItem('IS_AGREE_COOKIES', '1')
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
        }, 500)
      }
    },
  },
})
</script>

<style lang="scss">
.footer-cookies {
  transition: height 0.5s ease;
}
.footer {
  font-weight: 300;
  hr {
    display: none;
    @include media-breakpoint-up(md) {
      display: block;
    }
  }
}
.footer-nav {
  padding-top: 25px;
  display: block;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #878ea1;
  margin-left: -15px;
  margin-right: -15px;
  @include media-breakpoint-up(md) {
    min-height: 118px;
    display: flex;
    padding-bottom: 25px;
  }
  hr {
    position: relative;
    top: -25px;
    display: block;
    @include media-breakpoint-up(md) {
      display: none;
    }
  }
  .footer-contacts-email {
    display: none;
    @include media-breakpoint-up(lg) {
      display: inline-block;
    }
  }
}
.footer-nav-item {
  display: none;
  a {
    display: block;
    padding: 15px;
  }
  @include media-breakpoint-up(md) {
    display: inline-block;
  }
}
.footer-nav-logo-wrapper {
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 100%;
  width: 100%;
  @include media-breakpoint-up(xl) {
    flex: 0 0 auto;
    width: auto;
  }
}
.footer-nav-logo {
  display: block;
  flex: 0 0 $nav-logo-width;
  width: $nav-logo-width;
  max-width: 100%; // Reset earlier grid tiers
  margin-bottom: 15px;
  &:before {
    padding-top: #{$nav-logo-height / $nav-logo-width * 100%};
  }
  @include media-breakpoint-up(md) {
    margin-bottom: 21px;
  }
  @include media-breakpoint-up(xl) {
    margin-bottom: 14px;
  }
}
.footer-cookies-wrapper {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: bottom 0.5s ease;
}
.footer-cookies-box {
  font-weight: 400;
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
.footer-socials,
.footer-contacts,
.footer-social {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.footer-socials,
.footer-contacts {
  @include media-breakpoint-up(md) {
    padding-bottom: 34px;
  }
  @include media-breakpoint-up(md) {
    padding-bottom: 43px;
  }
}
.footer-socials {
  margin-left: -10px;
  margin-right: -10px;
  @include media-breakpoint-up(md) {
    padding-top: 47px;
    margin-left: 0;
    margin-right: 0;
  }
  .footer-socials-btn {
    display: none;
    @include media-breakpoint-up(lg) {
      display: inline-block;
    }
  }
}
.footer-social {
  justify-content: center;
  height: 50px;
  width: 50px;
  min-width: 50px;
  opacity: 0.65;
  transition: $btn-transition;
  @include media-breakpoint-up(md) {
    height: 42px;
    width: 42px;
    min-width: 42px;
  }
  i {
    height: 32px;
    width: 32px;
  }
  + .footer-social {
    @include media-breakpoint-up(md) {
      margin-left: auto;
    }
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
  justify-content: space-between;
  margin-top: 14px;
  @include media-breakpoint-up(lg) {
    display: none;
  }
  @include media-breakpoint-up(md) {
    margin-top: 0;
  }
  .footer-contacts-email {
    @include media-breakpoint-down(xs) {
      color: #ffffff !important;
      font-weight: 200;
      font-size: 16px;
    }
  }
  .footer-contacts-email,
  .footer-socials-btn {
    margin-bottom: 14px;
    @include media-breakpoint-up(md) {
      margin-bottom: 0;
    }
  }
}
.footer-copyright {
  padding-bottom: 24px;
  @include media-breakpoint-down(xs) {
    font-weight: 200;
  }
  @include media-breakpoint-up(sm) {
    padding-bottom: 38px;
  }
}
.footer-cookies-btn {
  margin-top: 19px;
  @include media-breakpoint-up(sm) {
    margin-top: 0;
    margin-left: 33px;
  }
}
</style>
