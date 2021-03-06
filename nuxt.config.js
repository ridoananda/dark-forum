export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DarkForum',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DarkForum' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  router: {
    base: '/dist',
    linkActiveClass: 'active'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://api-dark-forum.ardyans.com/',
    headers: {
      'Accept' : 'application/json'
    },
    withCredentials: true
  },

  auth: {
    strategies: {
      'laravelSanctum' : {
        provider: 'laravel/sanctum',
        url: 'https://api-dark-forum.ardyans.com',
        //url: 'http://localhost:8000',
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' },
        }
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  ssr: true,
  target: 'static',
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
