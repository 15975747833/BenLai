<template>
  <div id="app">
        <div>
            <router-view/>
        </div>
      <el-footer style="height: 0.49rem;padding:0rem 0rem;" id="footer">
          <!-- <span  @click="goto('/home')">
          <i class="el-icon-house"></i>
          <span>首页</span>
          </span>
          <span @click="goto('/category')">
          <i class="el-icon-postcard"></i>
          <span>分类</span>
          </span>
          <span @click="goto('/login')">
          <i class="el-icon-help"></i>
          <span>充值</span>
          </span>
          <span @click="goto('/cart')">
          <i class="el-icon-shopping-cart-1"></i>
          <span>购物车</span>
          </span> -->
          <!-- <span @click="goto('/my')">
          <i class="el-icon-user"></i>
          <span>我的</span>
          </span> -->
           <el-button @click="goto('/home')">
           <i class="el-icon-house"></i>
           首页
           </el-button>
           <el-button @click="goto('/category')">
           <i class="el-icon-postcard"></i>
           分类
           </el-button>
           <el-button @click="goto('/login')">
           <i class="el-icon-help"></i>
           充值
           </el-button>
           <el-button @click="goto('/cart')">
           <i class="el-icon-shopping-cart-1"></i>
           购物车
           </el-button>
           <el-button @click="goto('/my')">
           <i class="el-icon-user"></i>
           我的
           </el-button>
      </el-footer>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(ElementUI);
Vue.use(MintUI);
export default {
  data() {
    return {

    };
  },
  methods: {
  
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
}
#app {
 
  height: 100%;
  display: flex;
  flex-direction: column;
  #footer {
    overflow: hidden;
    width: 100%;
    position: fixed;
    z-index: 90;
    background: #fff;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .el-button{
       width:25%;height:100%;padding:0;margin:0; border:0;border-radius: 0;
        span{
            width: 20%;
            height: 100%;
            padding-top: 0.1rem;
            i {
                display: block;
                font-size: 0.2rem;
            } 
        }
    }
  }
}
</style>
