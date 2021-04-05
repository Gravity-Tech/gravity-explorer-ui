<template>
 <modal-content class="modal-transaction">
  <template v-slot:head>
   {{ tx.func_type }}
  </template>

  <template v-slot:body>
   <div class="row no-gutters">
    <div class="modal-node-data">
     <ul>
      <li v-if="tx">
       <span class="text-muted">Height:</span>
       {{ tx.height }}
      </li>
      <li v-if="tx">
       <span class="text-muted">Timestamp:</span>
       {{ tx.time }}
      </li>
      <li
       v-if="
        (tx.func_type === 'addOracle') |
         (tx.func_type === 'result') |
         (tx.func_type === 'signNewConsuls')
       "
      >
       <span class="text-muted">Chain type:</span>
       {{ data.chain_type }}
      </li>
      <li
       v-if="
        (tx.func_type === 'commit') |
         (tx.func_type === 'reveal') |
         (tx.func_type === 'addOracleInNebula') |
         (tx.func_type === 'result') |
         (tx.func_type === 'addNebula') |
         (tx.func_type === 'dropNebula') |
         (tx.func_type === 'signNewOracles')
       "
      >
       <span class="text-muted">Nebula id:</span>
       {{ data.nebula_id }}
      </li>
      <li
       v-if="
        (tx.func_type === 'commit') |
         (tx.func_type === 'reveal') |
         (tx.func_type === 'result')
       "
       class="address"
      >
       <span class="text-muted">Pulse id:</span>
       {{ data.pulse_id }}
      </li>
      <li
       v-if="
        (tx.func_type === 'signNewConsuls') |
         (tx.func_type === 'signNewOracles')
       "
       class="address"
      >
       <span class="text-muted">Round id:</span>
       {{ data.round_id }}
      </li>
      <li
       v-if="(tx.func_type === 'commit') | (tx.func_type === 'reveal')"
       class="address"
      >
       <span class="text-muted">Tc height:</span>
       {{ data.tc_height }}
      </li>
      <li
       v-if="
        (tx.func_type === 'result') |
         (tx.func_type === 'signNewConsuls') |
         (tx.func_type === 'signNewOracles')
       "
       class="address"
      >
       <span class="text-muted">Sign:</span>
       {{ data.sign }}
      </li>
      <li
       v-if="
        (tx.func_type === 'commit') |
         (tx.func_type === 'reveal') |
         (tx.func_type === 'addOracle') |
         (tx.func_type === 'addOracleInNebula') |
         (tx.func_type === 'result')
       "
       class="address"
      >
       <span class="text-muted">Oracle public key:</span>
       {{ data.oracle_pubkey }}
      </li>
      <li
       v-if="(tx.func_type === 'commit') | (tx.func_type === 'reveal')"
       class="address"
      >
       <span class="text-muted">Commit:</span>
       {{ data.commit }}
      </li>
      <li v-if="tx.func_type === 'reveal'" class="address">
       <span class="text-muted">Rq:</span>
       {{ data.rq }}
      </li>
      <li v-if="tx.func_type === 'reveal'" class="address">
       <span class="text-muted">Amount:</span>
       {{ data.amount }}
      </li>
      <li v-if="tx.func_type === 'reveal'" class="address">
       <span class="text-muted">Receiver:</span>
       {{ data.receiver }}
      </li>
     </ul>
     <div class="modal-node-description"></div>
    </div>
   </div>
  </template>
 </modal-content>
</template>

<script lang="ts">
import Vue from "vue";
import ModalContent from "~/components/ModalContent.vue";
import TableList from "~/components/TableList.vue";

export default Vue.extend({
 name: "ModalContentTransaction",
 components: {
  ModalContent,
  TableList
 },
 props: {
  data: {
   type: Object,
   default: () => {},
   required: false
  },
  tx: {
   type: Object,
   default: () => {},
   required: false
  }
 }
});
</script>

<style lang="scss">
.modal-transaction {
 .social-link {
  margin-right: 6px;
  margin-bottom: 4px;
 }
}
.modal-transaction-crown {
 position: absolute;
 right: -35px;
 top: 0;
 width: 24px;
 height: 24px;
}
.modal-transaction-data {
 padding-left: 42px;
 flex-basis: 0;
 flex-grow: 1;
 min-width: 0;
 max-width: 100%;
 ul {
  font-size: 13px;
  line-height: lh(13px, 19px);
  list-style: none;
  padding-left: 0;
  margin-bottom: 19px;
  li {
   display: block;
   margin-bottom: 9px;
  }
 }

 .address {
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;
 }
}
.modal-transaction-description {
 margin-bottom: 27px;
}
.modal-transaction-contacts {
 margin-bottom: 35px;
}
.modal-transaction-btn {
 min-width: 200px;
}
</style>
