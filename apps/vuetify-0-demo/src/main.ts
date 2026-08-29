import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@ui-kit/theme'

const app = createApp(App)

app.use(router)

app.mount('#app')
