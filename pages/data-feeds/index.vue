<template>
  <data-feeds
    :is-loading="isLoading"
    :list="datafeedList"
    @query-update="queryUpdate"
  ></data-feeds>
</template>

<script lang="ts">
import Vue from 'vue'
import { Subject as PublishSubject, BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, filter, distinctUntilChanged } from 'rxjs/operators'
import DataFeeds from '~/components/DataFeeds.vue'
import {
  DatafeedDataProvider,
  Datafeed,
  FetchCommand,
} from '~/data/providers/datafeed'
import { SystemTimeIntervalIterator } from '~/misc/iterator'

export default Vue.extend({
  components: {
    DataFeeds,
  },
  data() {
    return {
      datafeedList: [] as Datafeed[],
      isLoading: new BehaviorSubject<Boolean>(false),
      // isScrollDisabled: new BehaviorSubject<Boolean>(false),
      command: new BehaviorSubject<FetchCommand>({ page: 0 }),
      // command: {} as FetchCommand,
      dataFeedsSubject: new PublishSubject<Datafeed[]>(),
      iterator: new SystemTimeIntervalIterator({ regularity: 5 * 1000 }, () => {
        // @ts-ignore
        // this.updateData(this.command.value)
        // console.log({ a: this.command.value })
      }),
      subscriptions: [] as Subscription[],
    }
  },
  mounted() {
    const sub1 = this.dataFeedsSubject.subscribe((df: Datafeed[]) => {
      this.datafeedList = df
      this.isLoading.next(false)
    })

    const paginationSub = this.command
      .pipe(filter((command) => command.page !== undefined && this.datafeedList.length > 15))
      .subscribe((command) => {
        console.log('paginationSub', command.page)
        if (this.isLoading.value) return

        this.isLoading.next(true)
        this.concatData(command)
      })
    const searchSub = this.command
      .pipe(
        debounceTime(500),
        filter((command) => command.page === 0 && command.query !== undefined)
      )
      .subscribe((command) => {
        console.log('searchSub', command.page)
        this.isLoading.next(true)
        this.updateData(command)
      })

    this.subscriptions.push(sub1, paginationSub, searchSub)
    this.updateData(this.command.value)

    this.iterator.startInterval()
  },
  beforeDestroy() {
    this.iterator.stopInterval()
    for (const sub of this.subscriptions) {
      // @ts-ignore
      this.sub?.unsubscribe()
    }
  },
  methods: {
    updateData(command: FetchCommand) {
      DatafeedDataProvider.fetchAll(command).then((list) => {
        // @ts-ignore
        this.dataFeedsSubject.next(list)
      })
    },
    concatData(command: FetchCommand) {
      DatafeedDataProvider.fetchAll(command).then((list) => {
        // @ts-ignore
        this.dataFeedsSubject.next([...this.datafeedList, ...list])
      })
    },
    queryUpdate(command: FetchCommand) {
      console.log({ command, isLoading: this.isLoading }, 'A')
      this.command.next(command)
    },
  },
})
</script>

<style></style>
