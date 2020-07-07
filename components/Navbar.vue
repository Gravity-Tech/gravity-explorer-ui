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
          <div class="nav-panel-indikator">
            <icon image="/img/icons/feeds.svg"></icon>
            <span>Datafeeds</span> <b>102</b>
          </div>
        </div>
        <div class="nav-panel-col">
          <div class="nav-panel-indikator text-green">
            <icon image="/img/icons/pulses.svg"></icon>
            <span>Pulses</span> <b>20k</b>
          </div>
        </div>
        <div class="nav-panel-col">
          <div class="nav-panel-account">
            1,41 ETH | <b>$344</b>
            <icon image="/img/icons/metamask.svg"></icon>
            <span class="text-orange">0x1015e2 ...</span>
          </div>
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
})
</script>

<style lang="scss">
$nav-logo-height: 51px;
$nav-logo-width: 160.5px;
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
    margin-left: 50px;
  }
  i {
    top: 3px;
    margin-right: 5px;
  }
  b {
    padding-left: 4px;
    font-weight: 600;
    font-size: 15px;
    line-height: 1;
  }
}
.nav-panel-account {
  font-size: 14px;
  font-weight: 300;
  b {
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
