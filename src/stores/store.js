// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'main',
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment() {
            this.counter++
        },
    },
    // 应用 persist 插件
    persist: {
        enabled: true, // 启用持久化
    },
})
