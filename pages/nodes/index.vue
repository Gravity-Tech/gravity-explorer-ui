<template>
  <nodes 
    :is-loading="isLoading"
    @query-update="queryUpdate"
    :nodes-list="nodesList">
  </nodes>
</template>

<script lang="ts">
import Vue from 'vue'
import { Subject as PublishSubject, BehaviorSubject, Subscription } from 'rxjs'
import { debounceTime, filter } from 'rxjs/operators'
import Nodes from '~/components/Nodes.vue'
import { NodeDataProvider } from '~/data/providers/node'
import { Node } from '~/models/model/node'
import { FetchCommand } from '~/data/global'

export default Vue.extend({
  components: {
    Nodes,
  },
  data() {
    return {
      nodesList: [] as Node[],
      isLoading: new BehaviorSubject<Boolean>(false),
      command: new BehaviorSubject<FetchCommand>({ page: 0 }),
      nodesSubject: new PublishSubject<Node[]>(),
      subscriptions: [] as Subscription[],
    }
  },
  mounted() {
    // NebulaDataProvider.fetchAllNebulas().then((list) => {
    //   this.nebulaList = list
    // })
    const sub1 = this.nodesSubject.subscribe((df: Node[]) => {
      this.nodesList = df
      this.isLoading.next(false)
    })

    const paginationSub = this.command
      .pipe(
        filter(
          (command) => command.page !== undefined && this.nodesList.length > 15
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
  // mounted() {
  //   NodeDataProvider.fetchAllNodes().then((list) => {
  //     this.nodesList = list
  //   })
  // },
  methods: {
    updateData(command: FetchCommand) {
      NodeDataProvider.fetchAllNodes(command).then((list) => {
        // @ts-ignore
        this.nodesSubject.next(list)
      })
    },
    concatData(command: FetchCommand) {
      NodeDataProvider.fetchAllNodes(command).then((list) => {
        // @ts-ignore
        this.nodesSubject.next([...this.nodesList, ...list])
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
