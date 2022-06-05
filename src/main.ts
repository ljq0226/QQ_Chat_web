import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from '@/router'
const app = createApp(App)
setupRouter(app)
app.use(createPinia())
app.mount('#app')
