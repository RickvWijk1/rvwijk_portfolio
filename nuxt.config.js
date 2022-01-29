export default {
  target: 'static',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  router: {
    base: '/rvwijk_portfolio/'
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
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/global.css',
    '~/assets/css/font.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      {
        path: '~/components',
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
    '@nuxtjs/pwa',
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
  build: {}
}
