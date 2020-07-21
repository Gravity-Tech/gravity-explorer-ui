<template></template>

<script lang="ts">
import Vue from 'vue'
import { pathResolve } from '~/misc/path'

export default {
  fetch({ route, redirect }) {
    console.log({ route })

    redirect(301, pathResolve(route.path))
    // redirect(301, 'https://explorer.gravityhub.org');
  },
}
</script>

<style></style>
