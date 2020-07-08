<template>
  <div>
    <button class="modal-close" aria-label="Close Modal" @click="$modal.pop()">
      <icon>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(45 2.5 0)"
            fill="currentColor"
          />
          <rect
            y="27.5"
            width="38.85"
            height="3.525"
            rx="1.7625"
            transform="rotate(-45 0 27.5)"
            fill="currentColor"
          />
        </svg>
      </icon>
    </button>
    <div class="modal-head">
      Nebula @123
    </div>
    <div class="modal-body">
      1231
    </div>
    <hr />
    <div class="modal-footer">
      <table-list>
        <template v-slot:body>
          <tr v-for="index in 3" :key="index">
            <td>LinkPool Node 1</td>
            <td class="small" style="width: 40%;">
              Payouts depend on platform but are always automated and almost
              instant.
            </td>
            <td>Waves</td>
            <td class="text-green">10</td>
            <td>27.05.2020</td>
            <td>~10 WAVES | $12.6</td>
          </tr>
        </template>
      </table-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '~/components/Icon.vue'
import TableList from '~/components/TableList.vue'

export default Vue.extend({
  name: 'ModalContent',
  components: { Icon, TableList },
})
</script>
