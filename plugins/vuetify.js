import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        // theme: {
        //     disable: true
        // }
        theme: { light: true },
    })

    nuxtApp.vueApp.use(vuetify)
  })

