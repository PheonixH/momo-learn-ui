<template>
  <router-link :to="{name:'About'}">to about</router-link>
  <button @click="toAbout">about</button>
  <br>
  <router-link to="/home">to home</router-link>
  <button @click="toHome">home</button>
  <!-- routerlink相当于是一个<a>标签，点击后会跳转到相应的路径 -->
  <router-view></router-view>
  <!-- /home和/about路径对应的组件，将会在router-view的位置呈现 -->
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  setup(){
    let router = useRouter()
    return {
      toAbout: ()=>{router.push({path:'/about'})}, //除了router-link标签，还可以通过编程式路由进行跳转
      toHome: ()=>{router.push({path:'/home'})}
    }
  }
}
</script>
<style></style>
