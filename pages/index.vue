<template>
  <div class="container">
    <btn tag="a" href="/" class="btn-primary">
      awdwadawd
    </btn>
    <table-block>
      <template v-slot:head>
        <tr>
          <th style="width: 10%;">Name</th>
          <th>About</th>
          <th>Score (0-10)</th>
          <th>Deposit chain</th>
          <th>Node deposit</th>
          <th>Joined</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <td style="width: 10%;">LinkPool Node 1</td>
          <td>
            Payouts depend on platform but are always automated and almost
            instant.
          </td>
          <td>10</td>
          <td>Waves</td>
          <td>Waves</td>
          <td>27.05.2020</td>
        </tr>
      </template>
    </table-block>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Btn from '~/components/Btn.vue'
import TableBlock from '~/components/Table.vue'

export default Vue.extend({
  components: { Btn, TableBlock },
})
</script>

<style></style>
