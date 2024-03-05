/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

//Axios
import axios from '@/plugins/axios'

import { createPinia } from 'pinia'



// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(createPinia)
app.use(axios, {
    //Local
    baseUrl: 'http://localhost:3090/api'
    //Desarrollo
    //baseUrl: 'http://145.0.40.23:3030/api'
    //Producción
    //baseUrl: 'https://app.iecm.mx:3030/api'
})

registerPlugins(app)

app.mount('#app')
