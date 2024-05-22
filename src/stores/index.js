import {defineStore} from 'pinia';

export const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            token: "",
            count: 0
        };
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        increment() {
            this.count++;
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "your key",
                storage: localStorage,
            },
        ],
    },
});
