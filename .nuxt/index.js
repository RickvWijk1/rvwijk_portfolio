import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_2c3cadc9 from 'nuxt_plugin_plugin_2c3cadc9' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_63e20acb from 'nuxt_plugin_plugin_63e20acb' // Source: .\\vuetify\\plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_65e84d1d from 'nuxt_plugin_vuescrollto_65e84d1d' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_image_2b02c467 from 'nuxt_plugin_image_2b02c467' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_nuxtsvgsprite_eabf68ec from 'nuxt_plugin_nuxtsvgsprite_eabf68ec' // Source: .\\nuxt-svg-sprite.js (mode: 'all')
import nuxt_plugin_workbox_9c0fdcf0 from 'nuxt_plugin_workbox_9c0fdcf0' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_169cfe08 from 'nuxt_plugin_metaplugin_169cfe08' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_1b44a37c from 'nuxt_plugin_iconplugin_1b44a37c' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_lightbox_449b2fac from 'nuxt_plugin_lightbox_449b2fac' // Source: ..\\plugins\\lightbox.js (mode: 'all')
import nuxt_plugin_vuescrollto_44ce9a1c from 'nuxt_plugin_vuescrollto_44ce9a1c' // Source: ..\\plugins\\vue-scrollto.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const store = null
  const router = await createRouter(ssrContext, config, { store })

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Rick van Wijk - Portfolio","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Portfolio of Rick van Wijk"},{"name":"format-detection","content":"telephone=no"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Rick van Wijk"},{"hid":"theme-color","name":"theme-color","content":"#242424"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Rick van Wijk"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Rick van Wijk"},{"hid":"og:description","name":"og:description","property":"og:description","content":"The portfolio of Rick van Wijk"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Frvwijk_portfolio\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"hid":"shortcut-icon","rel":"shortcut icon","href":"\u002Frvwijk_portfolio\u002F_nuxt\u002Ficons\u002Ficon_64x64.cc9969.png"},{"hid":"apple-touch-icon","rel":"apple-touch-icon","href":"\u002Frvwijk_portfolio\u002F_nuxt\u002Ficons\u002Ficon_512x512.cc9969.png","sizes":"512x512"},{"rel":"manifest","href":"\u002Frvwijk_portfolio\u002F_nuxt\u002Fmanifest.3a472c45.json","hid":"manifest"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_2c3cadc9 === 'function') {
    await nuxt_plugin_plugin_2c3cadc9(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_63e20acb === 'function') {
    await nuxt_plugin_plugin_63e20acb(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_65e84d1d === 'function') {
    await nuxt_plugin_vuescrollto_65e84d1d(app.context, inject)
  }

  if (typeof nuxt_plugin_image_2b02c467 === 'function') {
    await nuxt_plugin_image_2b02c467(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtsvgsprite_eabf68ec === 'function') {
    await nuxt_plugin_nuxtsvgsprite_eabf68ec(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_9c0fdcf0 === 'function') {
    await nuxt_plugin_workbox_9c0fdcf0(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_169cfe08 === 'function') {
    await nuxt_plugin_metaplugin_169cfe08(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_1b44a37c === 'function') {
    await nuxt_plugin_iconplugin_1b44a37c(app.context, inject)
  }

  if (typeof nuxt_plugin_lightbox_449b2fac === 'function') {
    await nuxt_plugin_lightbox_449b2fac(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollto_44ce9a1c === 'function') {
    await nuxt_plugin_vuescrollto_44ce9a1c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
