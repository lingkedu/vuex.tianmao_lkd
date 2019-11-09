  import Vue from 'vue'
  import VueRouter from 'vue-router'
  
  import routes from "./routes"

  Vue.use( VueRouter ) //使用vue-router这个第三方插件


  const router = new VueRouter({
    mode: 'history',
    routes//路由表  必写的
  })


 export default  router