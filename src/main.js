import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import './axios'
import { createApp } from 'vue'

createApp(App).use(router).mount('#app')
