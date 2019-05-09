<template>
    <div>
        <el-header style="height:0.44rem;padding:0;">
        <header class="mint-header cart">
          <div class="mint-header-button is-left">
            <a href="#/" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon">
                  <i class="mintui mintui-back"></i>
                </span>
                <label class="mint-button-text"></label>
              </button>
            </a>
          </div>
          <el-col :span="16">
            <el-input placeholder="洪湖渔家小龙虾49.9元" prefix-icon="el-icon-search" class="mysearch"></el-input>
          </el-col>

          <div class="mint-header-button is-right">
              <span class="cart-icon">购物车</span>
            <button class="mint-button mint-button--default mint-button--normal">
              <span class="mint-button-icon">
                <i class="mintui mintui-more"></i>
              </span>
              <label class="mint-button-text"></label>
            </button>
          </div>
        </header>
      </el-header>

        <!-- <ul>
           <li v-for="item in navs" :key="item.name" @click="goto(item.path)">{{item.text}}</li>  
        </ul> -->
    </div>
</template>
<script>
    export default{
        data(){
            return {
            navs:[{
                name:'Phone',
                path:'/list/phone',
                text:'手机'

            },{
                name:'Computer',
                path:'/list/computer',
                text:'电脑'
            },{
                name:'Pad',
                path:'/list/pad',
                text:'平板'
            }],
        }
    },
    mounted(){
    },
    methods:{
        goto(path){
            // push 有浏览器记录
            // this.$router.push(path)

            // replace 无浏览器记录。
            this.$router.replace(path);
        }
    }
}

// this.$watch('$route')
</script>

<style lang="scss" scoped>
.el-header {
    .cart{
      width: 100%;
      height: 0.44rem;
      font: 400 0.18rem/0.44rem "黑体";
      color: #000;
      background: #fff;
      border-bottom: 1px solid #ccc;
      
    }
  }
</style>

