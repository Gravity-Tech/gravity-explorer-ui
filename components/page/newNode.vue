<template>
  <div></div>
</template>

<script>
//import { getNode } from '../misc/links'
import { sections, getNode } from '../global/links'

export default {
  fetch(params) {
    const { redirect } = params
    redirect(301, getNode(sections.protocol.links.find((link) => link.label === 'Submit'))
  },
}
</script>
