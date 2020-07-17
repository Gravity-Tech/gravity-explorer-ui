export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Gravity',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=768, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      {
        name: 'msapplication-config',
        content: '/favicon/browserconfig.xml',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com/',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#181a29',
      },
      { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/scss/app.scss', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~plugins/modal', ssr: false },
    { src: '~plugins/dropdown', ssr: false },
    { src: '~plugins/textarea-autosize', ssr: true },
    { src: '~plugins/infinite-scroll', ssr: false },
    { src: '~plugins/select', ssr: true },
    { src: '~plugins/filepond', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-lazy-load', { directiveOnly: true }],
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  /*
   ** Global SASS variables and mixins
   */
  styleResources: {
    scss: ['~/assets/scss/_import.scss'],
  },
}
