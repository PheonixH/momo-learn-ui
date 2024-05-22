// 	routes.js
import Home from '../components/HelloWorld.vue'
import About from '../components/TheWelcome.vue'
import Message from '../components/WelcomeItem.vue'

export default [
    {
        name: 'Home',
        path: '/home', //路径
        component: Home,	//该路径对应的组件
        meta: {describe: '主页面'} //meta属性存储一些路由的自定义信息
    },
    {
        name: 'About',
        path: '/about',
        component: About,
        children: [  //嵌套路由
            {
                name: 'Message',
                path: 'message', //路径为 /about/message
                component: Message //message组件将会展现在父路由组件的<router-view/>中
            }
        ]
    },
    {
        path: '/',  //当路径为'/'时，会自动定位到home,即重定向
        redirect: '/home'
        // redirect: { name: 'Home' } //也可以使用命名路由
    }
]
