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

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: "AIzaSyDXk2t3zHI_HkmDesC_h6sEnUSkGrEtlEs",
        authDomain: "playground-755db.firebaseapp.com",
        projectId: "playground-755db",
        storageBucket: "playground-755db.appspot.com",
        messagingSenderId: "267625066122",
        appId: "1:267625066122:web:382fb9b6a7e2cf03a90773"
      },
      services: {
        auth: {
          persistence: 'local', 
          initialize: {
            onAuthStateChangedAction: 'onAuthStateChangedAction',
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
