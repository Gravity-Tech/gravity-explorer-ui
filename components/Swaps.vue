<template>
 <div class="container">
  <tabs-and-search @query-update="queryUpdate"></tabs-and-search>
  <table-block
   ref="table"
   class="swaps-table"
   style="margin-bottom: 34px;"
   :is-loading="isLoading"
   @load-more="pageUpdate"
  >
   <template v-slot:head>
    <tr>
     <th class="header-swaps" style="width: 30%;">Timestamp</th>
     <th class="header-swaps" style="width: 30%;">Amount</th>
     <th class="header-swaps" style="width: 30%;">Direction</th>
     <th class="header-swaps" style="width: 30%;">Receiver</th>
    </tr>
   </template>
   <template v-slot:body>
    <tr
     v-for="(swap, index) in swapsList"
     :key="index"
     @click="handleSwapSelect(swap)"
    >
     <td v-if="swap" class="header-swaps">
      {{ swap ? formatTimestamp(swap.time) : "undefined" }}
     </td>
     <td v-if="swap" class="header-swaps">
      {{ formatAmount(swap.nebula_id, swap.amount) }}
     </td>
     <td v-if="swap" class="header-swaps">
      {{ getDirection(swap.nebula_id) }}
     </td>
     <td v-if="swap" class="header-swaps">
      {{ swap ? swap.receiver : "undefined" }}
     </td>
    </tr>
   </template>
  </table-block>
  <client-only>
   <modal v-if="currentSwap" name="modal-content-transaction">
    <modal-content-transaction :tx="currentSwap" :data="currentSwap">
    </modal-content-transaction>
   </modal>
  </client-only>
 </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableBlock from "~/components/Table.vue";
import TabsAndSearch from "~/components/TabsAndSearch.vue";
import Icon from "~/components/Icon.vue";
import TableAvatarIcon from "~/components/TableAvatarIcon.vue";
import { Swap } from "~/models/model/transaction";
import {
 TransactionDataProvider,
 GetSusyNebula
} from "~/data/providers/transaction";
import { FetchCommand } from "~/data/global";
import { TimestampFormatter } from "~/misc/format";

export default Vue.extend({
 name: "Swaps",
 components: {
  TableBlock,
  TabsAndSearch,
  Icon,
  TableAvatarIcon
 },
 // eslint-disable-next-line vue/require-prop-types
 props: ["swapsList", "isLoading"],
 data() {
  return {
   command: { page: 0 } as FetchCommand,
   currentSwap: null as Swap | null
  };
 },
 // eslint-disable-next-line vue/require-prop-types
     // computed: {
     //  mappedSwapsList() {
     //   return this.swapsList as Swap[];
     //  }
     // },
 methods: {
  queryUpdate(query: string) {
   // @ts-ignore
   this.$refs.table.$el.querySelector("tbody").scrollTo(0, 0);
   this.command = { query, page: 0 };
   this.$emit("query-update", this.command);
  },
  pageUpdate() {
   this.command.page = Number(this.command.page || 0) + 1;
   this.$emit("query-update", this.command);
  },
  handleSwapSelect(swap: Swap) {
   swap.func_type = "reveal";
   this.currentSwap = swap;
   console.log({ swap });

   this.$modal.push("modal-content-transaction");
  },
  formatTimestamp(timestamp: string) {
   return TimestampFormatter.format(timestamp);
  },
  formatAmount(nebula_id: string, amount: number) {
   var nebula = GetSusyNebula(nebula_id);
   if (!nebula) {
    return amount;
   }
   return nebula.formatAmount(amount);
  },
  getDirection(nebula_id: string) {
   var nebula = GetSusyNebula(nebula_id);
   if (!nebula) {
    return "undefined";
   }
   return nebula.direction;
  }
 }
});
</script>

<style lang="scss">
.swaps-table td {
 cursor: pointer;
}
.header-swaps {
 text-align: center;
}
.table-icon-cont {
 display: flex;
 flex-direction: row;

 & > :nth-child(1) {
  top: 0;
  margin: auto;
  margin-left: 0;
  margin-right: 8px;
 }
}
.d-none-lg {
 font-size: 13px;
}
.text-position {
 font-size: 13px;
}
</style>
