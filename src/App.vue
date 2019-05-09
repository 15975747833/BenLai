<template>
  <div id="app">
    <!-- <header id="header"></header>
    <main id="main">
      <router-view/>
    </main>
    <footer id="footer">
      <a href="#" @click="goto('/home')">
        <i class="el-icon-house"></i>
        <span>首页</span>
      </a>
      <a href="#" @click="goto('/category')">
        <i class="el-icon-postcard"></i>
        <span>分类</span>
      </a>
      <a href="#" @click="goto('/login')">
        <i class="el-icon-help"></i>
        <span>充值</span>
      </a>
      <a href="#" @click="goto('/cart')">
        <i class="el-icon-shopping-cart-1"></i>
        <span>购物车</span>
      </a>
      <a href="#" @click="goto('/my')">
        <i class="el-icon-user"></i>
        <span>我的</span>
      </a>
    </footer> -->
  
    <el-container>
      <el-main>
        <router-view />
      </el-main>
      <el-footer style="height: 0.49rem;">
        <a href="#" @click="goto('/home')">
          <i class="el-icon-house"></i>
          <span>首页</span>
        </a>
        <a href="#" @click="goto('/category')">
          <i class="el-icon-postcard"></i>
          <span>分类</span>
        </a>
        <a href="#" @click="goto('/login')">
          <i class="el-icon-help"></i>
          <span>充值</span>
        </a>
        <a href="#" @click="goto('/cart')">
          <i class="el-icon-shopping-cart-1"></i>
          <span>购物车</span>
        </a>
        <a href="#" @click="goto('/my')">
          <i class="el-icon-user"></i>
          <span>我的</span>
        </a>
      </el-footer>
      <!-- <router-view name='Footer'></router-view> -->
    </el-container>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(ElementUI);
Vue.use(MintUI);
export default {
  data() {
    return {};
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>


<style lang="scss" scoped>
#app{
  display: flex;
  flex-direction: column;
}
.el-header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 90;
  background: #fff;
  overflow: hidden;
}
.el-main {
  width: 100%;
  padding: 0;
}
.el-footer {
  overflow: hidden;
  width: 100%;
  position: fixed;
  z-index: 90;
  background: #fff;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  a {
    width: 20%;
    i {
      display: block;
      font-size: 0.2rem;
    }
    span {
      font: 400 0.1rem/0.14rem "黑体";
    }
  }
}

// </style>

// <style lang="scss" scoped>
// html,
// body {
//   height: 100%;

// }
// #app {
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   #header {
//     height: 0.44rem;
//     width: 100%;
//     border-bottom: 1px solid #ccc;
//   }
//   #main {
//     flex: 1;
//     overflow-x: hidden;
//   }
//   #footer {
//     position:fixed;
//     bottom:0;
//     background-color:#fff;
//     width: 100%;
//     height: 0.49rem;
//     border-top: 1px solid #ccc;
//     display: flex;
//     justify-content: space-between;
//     text-align: center;
//     a {
//       width: 20%;
//       i {
//         display: block;
//         font-size: 0.2rem;
//       }
//       span {
//         font: 400 0.1rem/0.14rem "黑体";
//       }
//     }
//   }
// }
</style>
