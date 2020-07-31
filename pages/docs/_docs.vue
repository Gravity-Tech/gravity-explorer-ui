<template></template>

<script lang="ts">
import Vue from 'vue'
import { pathResolve } from '~/misc/path'

export default {
  // @ts-ignore
  fetch({ route, redirect }) {
    // @ts-ignore
    redirect(301, pathResolve(route.path))
    // redirect(301, 'https://explorer.gravityhub.org');
  },
}
</script>

<style></style>
