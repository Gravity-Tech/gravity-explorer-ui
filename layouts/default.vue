<template>
  <div class="page-wrapper">
    <navbar-block :stats="stats"></navbar-block>
    <main>
      <Nuxt />
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script lang="ts">
import navbarBlock from '~/components/Navbar'
import footerBlock from '~/components/Footer'
import { CommonDataProvider, MappedCommonStats } from '~/data/providers/common'

export default {
  components: {
    navbarBlock,
    footerBlock,
  },
  data() {
    return {
      stats: {} as MappedCommonStats,
    }
  },
  mounted() {
    CommonDataProvider.fetchCommonStats().then((stats) => {
      // @ts-ignore
      this.stats = stats
    })
  },
}
</script>
