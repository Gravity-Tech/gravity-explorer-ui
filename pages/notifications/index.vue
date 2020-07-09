<template>
  <div class="container">
    <div class="dropdown">
      <button
        id="dropdownMenuButton1"
        v-dropdown
        class="dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <a class="dropdown-item" href="#">Explorer</a>
        <a class="dropdown-item" href="#">Node control panel</a>
        <a class="dropdown-item" href="#">FAQ</a>
        <a class="dropdown-item" href="#">Docs</a>
        <a class="dropdown-item" href="#">Log out</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style></style>
