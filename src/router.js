import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

import Home from './views/Home.vue';
import Category from './views/Category.vue';

import Cart from './views/Cart.vue';
import My from './views/My.vue';
import Login from './views/Login.vue';
import List from './views/List.vue';

import Search from './views/Search.vue';
import Address from './views/Address.vue';
import Goods from './views/Goods.vue';

// import Footer from './components/Footer.vue'



export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
      
    },
    {
      name: 'Category',
      path: '/category',
      component: Category,

    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'My',
      path: '/my',
      component: My
    }, 
    {
      name: 'Search',
      path: '/search',
      component: Search
    }, 
    {
      name: 'Address',
      path: '/address',
      component: Address
    },{
      name: 'List',
      path: '/list',
      component: List
    },{
      name:'Goods',
      path:'/goods',
      // path:'/goods/:id',
      component:Goods,
  }
  ]
})
