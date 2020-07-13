<template>
  <div class="container">
    <tabs-and-search></tabs-and-search>
    <table-block style="margin-bottom: 34px;">
      <template v-slot:head>
        <tr>
          <th style="width: 35px;"></th>
          <th style="width: 265px;">
            <span>
              Name (
              <icon
                image="/img/icons/сonsul.svg"
                style="top: 3px; margin-top: -6px;"
              ></icon>
              — Consul)
            </span>
          </th>
          <th class="d-none-lg" style="width: 30%;">About</th>
          <th>Score (0-10)</th>
          <th>Deposit chain</th>
          <th>Node deposit</th>
          <th class="d-none-lg">Joined</th>
        </tr>
      </template>
      <template v-slot:body>
        <tr v-for="index in 20" :key="index">
          <th style="width: 35px;">
            <icon
              v-if="index === 1"
              image="/img/icons/сonsul.svg"
              style="top: 1px;"
            ></icon>
          </th>
          <td style="width: 265px;">
            <table-avatar-icon>
              <icon image="/img/icons/nodes_table.svg"></icon>
            </table-avatar-icon>
            LinkPool Node 1
          </td>
          <td style="width: 30%;" class="d-none-lg">
            Payouts depend on platform but are always automated and almost
            instant.
          </td>
          <td class="text-green">
            10
            <icon
              v-if="index === 1"
              image="/img/icons/сonnect_node.svg"
              style="top: 5px;"
            ></icon>
          </td>
          <td>Waves</td>
          <td>~10 WAVES | $12.6</td>
          <td class="d-none-lg">27.05.2020</td>
        </tr>
      </template>
    </table-block>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TableBlock from '~/components/Table.vue'
import TabsAndSearch from '~/components/TabsAndSearch.vue'
import Icon from '~/components/Icon.vue'
import TableAvatarIcon from '~/components/TableAvatarIcon.vue'

export default Vue.extend({
  name: 'Nodes',
  components: {
    TableBlock,
    TabsAndSearch,
    Icon,
    TableAvatarIcon,
  },
})
</script>

<style lang="scss"></style>
