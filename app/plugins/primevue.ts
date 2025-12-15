import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox';

export default defineNuxtPlugin((nuxtApp) => {
    const app = nuxtApp.vueApp
    app.use(PrimeVue, { ripple: true })
    app.component('Button', Button)
    app.component('Checkbox', Checkbox)
})
