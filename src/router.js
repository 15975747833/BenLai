
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home.vue';
import List from './views/List.vue';
// import Category from './views/Category.vue';
// import Recharge from './views/Recharge.vue';
import Cart from './views/Cart.vue';
// import My from './views/My.vue';
// import Login from './views/Login.vue';




export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'List',
      path: '/list',
      component: List
    }
  ]
})
