<template>
 <swaps
  :is-loading="isLoading"
  @query-update="queryUpdate"
  :swaps-list="swapsList"
 >
 </swaps>
</template>

<script lang="ts">
import Vue from 'vue'
import { Subject as PublishSubject, BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, filter } from 'rxjs/operators'
import Swaps from '~/components/Swaps.vue'
import { TransactionDataProvider } from '~/data/providers/transaction'
import { Swap } from '~/models/model/transaction'
import { FetchCommand } from '~/data/global'

export default Vue.extend({
  components: {
    Swaps,
  },
  data() {
    return {
      swapsList: [] as Swap[],
      isLoading: new BehaviorSubject<Boolean>(false),
      command: new BehaviorSubject<FetchCommand>({ page: 1 }),
      swapsSubject: new PublishSubject<Swap[]>(),
      subscriptions: [] as Subscription[],
    }
  },
  mounted() {
    const sub1 = this.swapsSubject.subscribe((df: Swap[]) => {
      this.swapsList = df
      this.isLoading.next(false)
    })

    const paginationSub = this.command
      .pipe(
        filter(
          (command) => command.page !== undefined // && command.page !== 1 // && this.swapsList.length > 15
        )
      )
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
        this.isLoading.next(true)
        this.updateData(command)
      })

    this.subscriptions.push(sub1, paginationSub, searchSub)

    this.isLoading.next(true)
    this.updateData(this.command.value)
  },
  beforeDestroy() {
    for (const sub of this.subscriptions) {
      // @ts-ignore
      this.sub?.unsubscribe()
    }
  },
  methods: {
    updateData(command: FetchCommand) {
      TransactionDataProvider.fetchAllSwaps(command).then((list) => {
        // @ts-ignore
        this.swapsSubject.next(list)
      })
    },
    concatData(command: FetchCommand) {
      TransactionDataProvider.fetchAllSwaps(command).then((list) => {
        // @ts-ignore
        this.swapsSubject.next([...this.swapsList, ...list])
      })
    },
    queryUpdate(command: FetchCommand) {
        console.log({ command, isLoading: this.isLoading }, command.query, command.perPage)
        this.command.next(command)
    },
  },
})
</script>

<style></style>
