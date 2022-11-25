import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'


export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
      iconfont: 'mdi',
        components,
        // theme: {
        //     disable: true
        // }
        theme: { light: true },
    })

    nuxtApp.vueApp.use(vuetify)
  })
