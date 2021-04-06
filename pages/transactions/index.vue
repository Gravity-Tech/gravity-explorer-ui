<template>
 <transactions
  :is-loading="isLoading"
  @query-update="queryUpdate"
  :transactions-list="transactionsList"
 >
 </transactions>
</template>

<script lang="ts">
import Vue from 'vue'
import { Subject as PublishSubject, BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, filter } from 'rxjs/operators'
import Transactions from '~/components/Transactions.vue'
import { TransactionDataProvider } from '~/data/providers/transaction'
import { Transaction } from '~/models/model/transaction'
import { FetchCommand } from '~/data/global'

export default Vue.extend({
  components: {
    Transactions,
  },
  data() {
    return {
      transactionsList: [] as Transaction[],
      isLoading: new BehaviorSubject<Boolean>(false),
      command: new BehaviorSubject<FetchCommand>({ page: 0 }),
      transactionsSubject: new PublishSubject<Transaction[]>(),
      subscriptions: [] as Subscription[],
    }
  },
  mounted() {
    const sub1 = this.transactionsSubject.subscribe((df: Transaction[]) => {
      this.transactionsList = df
      this.isLoading.next(false)
    })

    const paginationSub = this.command
      .pipe(
        filter(
            (command) => command.page !== undefined && command.page !== 1 && this.transactionsList.length > 15
        )
      )
      .subscribe((command) => {
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
      TransactionDataProvider.fetchAllTransactions(command).then((list) => {
        // @ts-ignore
        this.transactionsSubject.next(list)
      })
    },
    concatData(command: FetchCommand) {
      TransactionDataProvider.fetchAllTransactions(command).then((list) => {
        // @ts-ignore
        this.transactionsSubject.next([...this.transactionsList, ...list])
      })
    },
    queryUpdate(command: FetchCommand) {
      this.command.next(command)
    },
  },
})
</script>

<style></style>
