<template>
  <div></div>
</template>

<script>
import { sections, getNodeLink } from '../global/links'

export default {
  fetch(params) {
    const { redirect } = params
    redirect(301, getNodeLink(internalProtocolLinks).link)
  },
}
</script>
