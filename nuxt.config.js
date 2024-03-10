export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  router: {
    base: '/rvwijk_portfolio/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rick van Wijk - Portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Portfolio of Rick van Wijk'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/rvwijk_portfolio/favicon.ico'
    }],
    // script: [
    //   {
    //     type: 'text/javascript',
    //     src: 'js/modal.js',
    //     body: true
    //   }
    // ],
  },

  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css',
    '~/assets/css/font.css',
  ],

  styleResources: {
    scss: [
      '~assets/scss/global.scss',
      '~assets/scss/bottomnav.scss',
    ]
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
   },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lightbox.js' },
    { src: '~/plugins/vue-scrollto.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
      },
      {
        path: '~/threed',
        extensions: ['vue'],
      },
      {
        path: '~/components/about',
        prefix: 'About',
        extensions: ['vue'],
      },
      {
        path: '~/components/ui',
        prefix: 'UI',
        extensions: ['vue'],
      },
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
  ],
  svgSprite: {
    // manipulate module options
  },


    pwa: {
      icon: {
      },
      meta: {
        /* meta options */

      },
      manifest:{
        name: 'Rick van Wijk',
        short_name: 'Rick v W',
        description: 'The portfolio of Rick van Wijk',
        background_color: '#242424',
        theme_color: '#242424'
      }
    },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "three"
    ],
    // babel: { compact: true }
  },
 
}
