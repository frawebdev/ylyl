export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YLYL',
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyDOe9lVLhQt8Vo3zPXxMO0nRP1TcTNnpiE",
        authDomain: "fwd-hub.firebaseapp.com",
        projectId: "fwd-hub",
        storageBucket: "fwd-hub.appspot.com",
        messagingSenderId: "127072509019",
        appId: "1:127072509019:web:dcacaf6b1098cb1d5b337e"
      },
      services: {
        auth: {
          persistence: 'local', 
          initialize: {
            /* onAuthStateChangedAction: 'onAuthStateChangedAction', */
            subscribeManually: false
          },
          ssr: false
        }
      }
    }
  ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware: [
    {
      path: 'api',
      handler: '~/api/getJoke'
    }
  ]
}
