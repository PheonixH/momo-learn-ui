import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {RadioGroup, Button} from "ant-design-vue";
const app = createApp(App)

app.mount('#app')
app.use(RadioGroup)
app.use(Button)

