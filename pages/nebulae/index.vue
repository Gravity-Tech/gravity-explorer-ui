<template>
  <nebulae
    :is-loading="isLoading"
    :nebula-list="nebulaList"
    @query-update="queryUpdate"
  ></nebulae>
</template>

<script lang="ts">
import Vue from 'vue'
import { Subject as PublishSubject, BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, filter } from 'rxjs/operators'
import Nebulae from '~/components/Nebulae.vue'
import { NebulaDataProvider } from '~/data/providers/nebula'
import { Nebula } from '~/models/model/nebula'
import { FetchCommand } from '~/data/global'


export default Vue.extend({
  components: {
    Nebulae,
  },
  data() {
    return {
      nebulaList: [] as Nebula[],
      isLoading: new BehaviorSubject<Boolean>(false),
      command: new BehaviorSubject<FetchCommand>({ page: 0 }),
      nebulasSubject: new PublishSubject<Nebula[]>(),
      subscriptions: [] as Subscription[],
    }
  },
  mounted() {
    // NebulaDataProvider.fetchAllNebulas().then((list) => {
    //   this.nebulaList = list
    // })
    const sub1 = this.nebulasSubject.subscribe((df: Nebula[]) => {
      this.nebulaList = df
      this.isLoading.next(false)
    })

    const paginationSub = this.command
      .pipe(
        filter(
          (command) => command.page !== undefined && this.nebulaList.length > 15
        )
      )
      .subscribe((command) => {
        // console.log('paginationSub', command.page)
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
        // console.log('searchSub', command.page)
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
      NebulaDataProvider.fetchAllNebulas(command).then((list) => {
        // @ts-ignore
        this.nebulasSubject.next(list)
      })
    },
    concatData(command: FetchCommand) {
      NebulaDataProvider.fetchAllNebulas(command).then((list) => {
        // @ts-ignore
        this.nebulasSubject.next([...this.nebulaList, ...list])
      })
    },
    queryUpdate(command: FetchCommand) {
      // console.log({ command, isLoading: this.isLoading }, command.query)
      this.command.next(command)
    },
  },
})
</script>

<style></style>
