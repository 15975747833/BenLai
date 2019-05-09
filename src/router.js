import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

import Home from './views/Home.vue';
import Category from './views/Category.vue';
// import Recharge from './views/Recharge.vue';
import Cart from './views/Cart.vue';
import My from './views/My.vue';
import Login from './views/Login.vue';

import Footer from './components/Footer.vue'
// console.log('footer',Footer);



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
      components: {
        default:Home,
        Footer
      }
    },
    {
      name: 'Category',
      path: '/category',
      component: Category,
      children:[{
        name:'水果',
        path:'/5cd121f8a2b95e1f1c79586e'
      }]
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
    }
  ]
})
