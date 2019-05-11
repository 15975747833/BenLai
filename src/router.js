import Vue from 'vue'
import Router from 'vue-router'

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
import Pay from './views/Pay.vue';


const router = new Router({
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
      component: Cart,
      meta: {
        loginStatus: true
      }
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
    }, {
      name: 'List',
      path: '/list',
      component: List
    }, {
      name: 'Goods',
      path: '/goods',
      component: Goods,
    },
    {
      name: 'Pay',
      path: '/pay',
      component: Pay,
    }
  ]

})
router.beforeEach((to, from, next) => {
  // console.log('next',next.params)
  // 全局路由判断有没有meta属性，有-> 校验localStorage的值；无直接放行
  if (to.matched.some(record => record.meta.loginStatus)) {
    // 校验本地存储登陆状态
    let loginStatus = localStorage.getItem('loginStatus')
    if (loginStatus) {
      next();
    } else {
      //登陆状态为否，跳转到登陆页
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }

  } else(
    next({
      query: {
        redirect: to.fullPath
      }
    })
  )

})

export default router;
// export default new Router({
//   // mode: 'history',
//   base: process.env.BASE_URL,

//   routes: [{
//       path: '/',
//       redirect: '/home'
//     },
//     {
//       name: 'Home',
//       path: '/home',
//       component: Home

//     },
//     {
//       name: 'Category',
//       path: '/category',
//       component: Category,

//     },
//     {
//       name: 'Login',
//       path: '/login',
//       component: Login
//     },
//     {
//       name: 'Cart',
//       path: '/cart',
//       component: Cart,
//       meta: {
//         loginStatus: true
//       }
//     },
//     {
//       name: 'My',
//       path: '/my',
//       component: My
//     },
//     {
//       name: 'Search',
//       path: '/search',
//       component: Search
//     },
//     {
//       name: 'Address',
//       path: '/address',
//       component: Address
//     }, {
//       name: 'List',
//       path: '/list',
//       component: List
//     }, {
//       name: 'Goods',
//       path: '/goods',
//       // path:'/goods/:id',
//       component: Goods,
//     }
//   ]


// })
// .beforeEach((to,from,next)=>{
//   console.log('to',to)
// })