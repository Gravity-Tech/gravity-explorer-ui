/* eslint-disable no-unused-expressions */
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
import { Subject as PublishSubject, Subscription } from 'rxjs'
import navbarBlock from '~/components/Navbar'
import footerBlock from '~/components/Footer'
import { CommonDataProvider, MappedCommonStats } from '~/data/providers/common'
import { SystemTimeIntervalIterator } from '~/misc/iterator'

export default {
  components: {
    navbarBlock,
    footerBlock,
  },
  data() {
    return {
      stats: {} as MappedCommonStats,
      statsSubject: new PublishSubject<MappedCommonStats>(),
      subsription: null as Subscription | null,
      iterator: new SystemTimeIntervalIterator({ regularity: 5 * 1000 }, () => {
        // @ts-ignore
        this.updateData()
      }),
    }
  },
  mounted() {
    this.statsSubject.subscribe((stats: MappedCommonStats) => {
      this.stats = stats
    })

    this.updateData()
    this.iterator.startInterval()
  },
  beforeDestroy() {
    this.iterator.stopInterval()
    // @ts-ignore
    this.subsription?.unsubscribe()
  },
  methods: {
    updateData() {
      CommonDataProvider.fetchCommonStats().then((stats) => {
        // @ts-ignore
        this.statsSubject.next(stats)
      })
    },
  },
}
</script>
