<template>
  <nav class="nav">
    <div class="nav-container container">
      <nuxt-link to="/" class="nav-logo responsive responsive-bsizer">
        <img class="responsive-item" src="/img/logo.svg" alt="Logo" />
      </nuxt-link>
      <div class="nav-panel">
        <div class="nav-panel-col">
          <div class="nav-panel-indikator">
            <icon image="/img/icons/nodes.svg"></icon>
            <span>Nodes</span> <b>32</b>
          </div>
          <div class="nav-panel-indikator">
            <icon image="/img/icons/pulses.svg"></icon>
            <span>Pulses</span> <b>20k</b>
          </div>
          <div class="nav-panel-indikator nav-panel-datafeeds">
            <icon image="/img/icons/datafeeds.svg"></icon>
            <span>Datafeeds</span> <b>102</b>
          </div>
        </div>
        <div v-if="isAuth" class="nav-panel-col">
          <div class="nav-panel-indikator text-green">
            <icon image="/img/icons/node_connected.svg"></icon>
            <span>Node Connected</span>
          </div>
        </div>
        <div v-if="isAuth" class="nav-panel-col">
          <div class="nav-panel-info">
            1,41 ETH | <b>$344</b>
            <icon image="/img/icons/metamask.svg"></icon>
            <span class="text-orange">0x1015e2 ...</span>
          </div>
          <nuxt-link to="/notifications" class="nav-panel-notifications">
            <icon>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.08512 24.5071L5.14558 21.1836C6.0972 19.6496 6.60004 17.8926 6.60004 16.1043V13.1931C6.60004 9.51772 9.13453 6.40909 12.6003 5.40692V3.3225C12.6003 2.04164 13.6767 1 15.0004 1C16.3241 1 17.4005 2.04164 17.4005 3.3225V5.40692C20.8662 6.40909 23.4007 9.51772 23.4007 13.1931V16.1043C23.4007 17.8926 23.9036 19.6484 24.854 21.1824L26.9144 24.5059C27.0261 24.6859 27.0285 24.9089 26.9217 25.0912C26.8148 25.2735 26.6168 25.3862 26.4008 25.3862H3.59994C3.38393 25.3862 3.18474 25.2735 3.07792 25.0924C2.97109 24.9112 2.9747 24.6859 3.08512 24.5071Z"
                  fill="currentColor"
                />
                <path
                  d="M18.6919 26.2905C18.0306 27.8865 16.6306 29.0001 14.9996 29.0001C13.3687 29.0001 11.9686 27.8865 11.3073 26.2905H18.6919V26.2905Z"
                  fill="currentColor"
                />
              </svg>
            </icon>
            <div class="nav-panel-notifications-text">3</div>
          </nuxt-link>
          <div class="nav-panel-account">
            <div class="dropdown">
              <button
                id="dropdownMenuButton"
                v-dropdown
                class="nav-panel-account-toggle dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="nav-panel-avatar-bg">
                  <span
                    class="nav-panel-avatar"
                    :lazy-background="'/img/card/avatar1.svg'"
                  ></span>
                </span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
              >
                <a class="dropdown-item" href="#">Explorer</a>
                <a class="dropdown-item" href="#">Node control panel</a>
                <a class="dropdown-item" href="#">FAQ</a>
                <a class="dropdown-item" href="#">Docs</a>
                <a class="dropdown-item" href="#">Log out</a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isAuth" class="nav-panel-col" style="margin-left: auto;">
          <a href="/" class="link-invert">
            <div class="nav-panel-indikator">
              <icon image="/img/icons/login.svg"></icon>
              <span>Login</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'

export default Vue.extend({
  components: { Icon },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth']
    },
  },
})
</script>

<style lang="scss">
$nav-panel-height: 42px;

.nav {
  padding-top: 8px;
  height: 108px;
  border-bottom: 1px solid #2e3148;
  width: 100%;
  display: flex;
  align-items: center;
}
.nav-container {
  display: flex;
  align-items: flex-end;
}
.nav-logo {
  display: block;
  flex: 0 0 $nav-logo-width;
  width: $nav-logo-width;
  max-width: 100%; // Reset earlier grid tiers
  margin-right: 41px;
  &:before {
    padding-top: #{$nav-logo-height / $nav-logo-width * 100%};
  }
}

.nav-panel {
  height: $nav-panel-height;
  background: linear-gradient(180.06deg, #323650 -104.69%, #22253b 150.92%);
  border-radius: 6px;
  padding-left: 38px;
  padding-right: 43px;
  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
}
.nav-panel,
.nav-panel-col {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-panel-col {
  @include make-col-auto();
}
.nav-panel-indikator {
  display: flex;
  align-items: flex-end;
  white-space: normal;
  font-size: 12px;
  line-height: 1;
  top: -5px;
  position: relative;
  + .nav-panel-indikator {
    margin-left: 25px;
    @include media-breakpoint-up(xxl) {
      margin-left: 50px;
    }
  }
  i {
    top: 4px;
    margin-right: 5px;
  }
  b {
    padding-left: 4px;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
  }
}
.nav-panel-datafeeds {
  i {
    margin-right: 2px;
  }
}
.nav-panel-info {
  display: flex;
  white-space: nowrap;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  i {
    margin-right: 10px;
    margin-left: 10px;
  }
  b {
    font-size: 14px;
    font-weight: 400;
  }
}
.nav-panel-notifications {
  position: relative;
  display: block;
  width: 100%;
  flex: 0 0 40px;
  height: 30px;
  max-width: 40px;
  margin-left: 30px;
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%);
  }
  &:hover {
    .icon {
      color: $green;
    }
  }
}
.nav-panel-notifications-text {
  position: absolute;
  right: 0;
  top: 4px;
  background-color: #da4444;
  border-radius: 2px;
  line-height: 1;
  font-weight: 600;
  font-size: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 17px;
}
.nav-panel-account {
  margin-left: 30px;
}
.nav-panel-account-toggle {
  background: transparent;
  border: none;
  outline: none !important;
}
.nav-panel-avatar-bg {
  position: relative;
  display: block;
  width: 100%;
  flex: 0 0 26px;
  min-width: 26px;
  height: 26px;
  max-width: 26px;
  background: linear-gradient(
    234.03deg,
    rgba(#0533f5, 0.68) 12.5%,
    rgba(#f39949, 0.68) 68.45%
  );
  border-radius: 50%;
}
.nav-panel-avatar {
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@include media-breakpoint-between(md, lg) {
  .nav {
    height: auto;
    padding-top: 3px;
    padding-bottom: 24px;
  }
  .nav-container {
    position: relative;
    padding-top: 100px;
  }
  .nav-logo {
    position: absolute;
    top: 24px;
    left: #{$grid-gutter-width / 2};
  }
  .nav-panel-notifications {
    margin-left: 50px;
  }
  .nav-panel {
    .nav-panel-col {
      &:first-child {
        position: absolute;
        top: 50px;
        right: #{$grid-gutter-width / 2};
        .nav-panel-indikator + .nav-panel-indikator {
          margin-left: 50px;
        }
      }
    }
  }
}
</style>
