export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'justconnectnuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/css/main.css' 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vClickOutside", ssr: false }
  ],

  router: {
    // Set the initial page to be rendered
    default: '/home/feed'
  },
  
  layouts: {
    home: `@/layouts/authlayout.vue`
  },
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.mjs$/,
//           include: /node_modules/,
//           type: "javascript/auto"
//         }
//       ] 
//     }
//   }
// }