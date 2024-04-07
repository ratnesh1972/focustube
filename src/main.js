import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// Configure PrimeVue instance
app.use(PrimeVue)

// PrimeVue configuration options can be defined in object passed as second argument
// for more info - https://primevue.org/configuration/
// app.use(PrimeVue, {ripple : true})

app.mount('#app')
