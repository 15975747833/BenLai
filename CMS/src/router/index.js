import Vue from 'vue';

// 1.引入vue-router
import VueRouter from 'vue-router';
// 2.安装插件
Vue.use(VueRouter);

import Login from '@/pages/Login.vue';
import Home from '@/pages/Home.vue';
import Home2 from '@/pages/Home2.vue';
import Goodslist from '@/pages/Goodslist.vue';
import Myinfo from '@/pages/Myinfo.vue';
import Userslist from '@/pages/Userslist.vue';
import Category from '@/pages/Category.vue';
import Addgoods from '@/pages/Addgoods.vue';
import Orderlist from '@/pages/Orderlist.vue';
import Goodsnone from '@/pages/Goodsnone.vue';
import Echart from '@/pages/Echart.vue';


// 3.实例化router并配置参数
const router = new VueRouter({
    // mode:'history',
    routes:[{
        path:'/',
        name:'Login',
        redirect:'/login',
        component:Login
       
    },{
        name:'Login',
        path:'/login',
        component:Login
    }
    
    ,{
        name:'Home',
        path:'/home',
        component:Home,
        children:[{
            path:'home2',
            component:Home2
        },{
            path:'goodslist',
            component:Goodslist
        },{
            path:'myinfo',
            component:Myinfo
        },{
            path:'userslist',
            component:Userslist
        },{
            path:'category',
            component:Category
        },
        {
            path:'addgoods',
            component:Addgoods
        },
        {
            path:'orderlist',
            component:Orderlist
        },{
            path:'goodsnone',
            component:Goodsnone
        },{
            path:'echart',
            component:Echart
        }]
       
    }]
})

// 全局路由守卫
router.beforeEach((to,from,next)=>{
    // console.log('beforeEach');
    next();
})
router.afterEach((to,from)=>{
    // console.log('afterEach')
})

export {
    router
}
export default router;