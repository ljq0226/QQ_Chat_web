import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { setupRouter } from '@/router'
import Socketio from '@/utils/socket.io'
const app = createApp(App)

setupRouter(app)
app.use(createPinia())
app.use(Socketio, {
  connection: 'http://localhost:3000',
  options: {
    autoConnect: true, //关闭自动连接
    // ...其它选项
  },
})
app.mount('#app')
