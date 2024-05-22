import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'

import { createPinia } from "pinia"
import piniaPluginPersist from 'pinia-plugin-persist'
import {RadioGroup, Button} from "ant-design-vue";

const app = createApp(App)

app.use(router)
app.use(RadioGroup)
app.use(Button)

app.mount('#app')

const store = createPinia()
store.use(piniaPluginPersist)

export default store






