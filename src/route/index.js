// index.js
import routes from "./routes"
import {createWebHashHistory, createRouter} from 'vue-router'
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router
