// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },
})
