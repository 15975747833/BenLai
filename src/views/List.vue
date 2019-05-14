<template>
  <div class="list">
    <el-header style="height:0.44rem;padding:0;">
      <header class="mint-header cart">
        <div class="mint-header-button is-left" @click="prev()">
          <a class="router-link-active">
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
        <el-col :span="2" class="cart-title-icon"><img src="../img/cart_icon.png" @click="next()"></el-col>
        <div class="mint-header-button is-right">
          
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-more"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </div>
      </header>
    </el-header>
    <el-main style="width:100%;">
        <el-row :gutter="30" style="padding-bottom:12px;border-bottom:1px solid #ccc;">
            <el-col :span="6">
            综合
            </el-col>
            <el-col :span="6">
            价格
            </el-col>
            <el-col :span="6">
            销量
            </el-col>
            <el-col :span="6">
            筛选
            </el-col>
         </el-row>
        <div class="cartUnit">
            <ul v-if="goodslist">
                <li v-for="goods in goodslist" :key='goods.sysNo' @click='goto(goods)'>
                    <img :src="goods.imageUrl">
                    <div class="info">
                    <h4>{{goods.productName}}</h4>
                    <p class="content">
                        {{goods.promotionWord}}
                    </p>
                    <p class="method">{{goods.promotionsTags[0][0]}}</p>
                    <p class="price"><span>￥{{goods.price.price}}</span><del>￥{{goods.price.origPrice}}</del></p>
                    
                    <i><img src="../img/cart_icon.png"></i>
                    </div>
                </li>
            </ul>
        </div>
    </el-main>
  </div>
  
</template>
<script>
    export default {
     data(){
        return {
            goodslist:null
        }
    },
    methods:{
      goto(goods){
        let {type} = this.$route.params; 
        this.$router.push({name:'Goods',params:{goodsNum:goods.goodsNum}});
        
      },
      prev(){
        this.$router.go(-2)
      },
      next(){
      this.$router.push('/cart');
      },
  },
    created(){
        let {type} = this.$route.params;
        // 根据id请求商品信息
         this.$axios.get('http://193.112.60.97:19011/goodslist',{
           params:{
             type
           }
         }).then((res)=>{
           let {data} = res;
           data.forEach(item => {
             if(!item.promotionsTags.length){
              item.promotionsTags = ["",""]
             }
           });
           this.goodslist = data;
           console.log("this.goodslist=",this.goodslist);
        });
    }
  }
</script>

<style lang="scss" scoped>
.list{
    .el-header {
        .cart {
            width: 100%;
            height: 0.44rem;
            font: 400 0.18rem/0.44rem "黑体";
            color: #000;
            background: #fff;
            border-bottom: 1px solid #ccc;
            .cart-title-icon img{
                width:0.26rem;
                height:0.2rem;
                margin-left:0.1rem;
            }
        }
    }
    .cartUnit{
    ul{
      width:100;
      overflow: hidden;
      li{
       width:100%;
       height:1.26rem;
       position: relative;
        img{
          width:1rem;
          height:1rem;
          float: left;
        }
        .info{
          width:auto;
          padding:15px;
          height:1rem;
          h4{
              font-size: .14rem;
              color: #000;
              font-weight: normal;
              overflow: hidden;
              height: .2rem;
              line-height: .2rem;
          }
          .content{
              font-size: .12rem;
              color: #999;
              overflow: hidden;
              height: .2rem;
              line-height: .2rem;
          }
          .method{
              float: left;
              line-height: .15rem;
              height: .16rem;
              color: #ff6900;
              border: 1px solid #ffdfc7;
              font-size: .1rem;
              margin: .08rem .05rem 0rem 0rem;
              padding: 0rem .03rem;
              box-sizing: border-box;
              background-color: #fff4eb;
          }
          .price{
              margin-top:0.28rem;
              font-size: .12rem;
              color: #ff6900;
               span{
                  font-size: .18rem;
                  font-weight: 700;
              }
              del{
                font-size: .12rem;
                color: #999;
                margin-left: .1rem;
                text-decoration: line-through;
              }
          }
          i{
            display: block;
            position:absolute;
            right:0.25rem;
            bottom:0.09rem;
            img{
              width:0.24rem;
              height:0.19rem;
            }
          }
         
        }
      }
    }
  }
}
</style>