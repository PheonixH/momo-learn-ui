// router.js 或者相关的路由配置文件
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/sys/login/Login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // 假设用户信息存储在 Vuex 或 localStorage/sessionStorage
    const isUserLoggedIn = false/* 根据实际情况获取用户登录状态 */;

    if (to.name !== 'Login' && !isUserLoggedIn) {
        // 如果用户未登录且尝试访问非登录页，重定向到登录页
        next({ name: 'Login' });
    } else {
        // 否则，继续正常的路由
        next();
    }
});

export default router;
