<template>
 <div class="container">
  <tabs-and-search @query-update="queryUpdate"></tabs-and-search>
  <table-block
   ref="table"
   class="transactions-table"
   style="margin-bottom: 34px;"
   :is-loading="isLoading"
   @load-more="pageUpdate"
  >
   <template v-slot:head>
    <tr>
     <th class="header-transactions" style="width: 30%;">Timestamp</th>
     <th class="header-transactions" style="width: 30%;">Type</th>
     <th class="header-transactions" style="width: 30%;">Height</th>
    </tr>
   </template>
   <template v-slot:body>
    <tr
     v-for="(transaction, index) in transactionsList"
     :key="index"
     @click="handleTransactionSelect(transaction)"
    >
     <td v-if="transaction" class="header-transactions">
      {{ transaction ? formatTimestamp(transaction.time) : "undefined" }}
     </td>
     <td v-if="transaction" class="header-transactions">
      {{ transaction ? transaction.func_type : "undefined" }}
     </td>
     <td v-if="transaction" class="header-transactions">
      {{ transaction ? transaction.height : "undefined" }}
     </td>
    </tr>
   </template>
  </table-block>
  <client-only>
   <modal v-if="currentTransaction" name="modal-content-transaction">
    <modal-content-transaction
     :tx="currentTransaction"
     :data="currentTransactionData"
    >
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
import { Transaction } from "~/models/model/transaction";
import { TransactionDataProvider } from "~/data/providers/transaction";
import { FetchCommand } from "~/data/global";
import { TimestampFormatter } from "~/misc/format";

export default Vue.extend({
 name: "Transactions",
 components: {
  TableBlock,
  TabsAndSearch,
  Icon,
  TableAvatarIcon
 },
 // eslint-disable-next-line vue/require-prop-types
 props: ["transactionsList", "isLoading"],
 data() {
  return {
   command: { page: 0 } as FetchCommand,
   currentTransaction: null as Transaction | null,
   currentTransactionData: {} as Object
  };
 },
 // eslint-disable-next-line vue/require-prop-types
 computed: {
  mappedTransactionsList() {
   return this.transactionsList as Transaction[];
  }
 },
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
  handleTransactionSelect(transaction: Transaction) {
   this.currentTransaction = transaction;
   console.log({ transaction });
   this.fetchTransactionData(transaction.func_type, transaction.tx_id);

   this.$modal.push("modal-content-transaction");
  },
  fetchTransactionData(func: string, tx_id: number) {
   TransactionDataProvider.fetchTransactionData(func, tx_id).then(data => {
    this.currentTransactionData = data;
   });
  },
  formatTimestamp(timestamp: string) {
   return TimestampFormatter.format(timestamp);
  }
 }
});
</script>

<style lang="scss">
.transactions-table td {
 cursor: pointer;
}
.header-transactions {
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
