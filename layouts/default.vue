<template>
  <div class="page-wrapper">
    <navbar-block></navbar-block>
    <main>
      <Nuxt />
    </main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import navbarBlock from '~/components/Navbar'
import footerBlock from '~/components/Footer'

export default {
  components: {
    navbarBlock,
    footerBlock,
  },
}
</script>
