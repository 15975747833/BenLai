<template>
  <div class="home">
    <div id="header">
      <el-header class="header">
        <el-row :gutter="3">
          <el-col :span="4" class="dizhi">
            <span class="rignt">北京</span>
          </el-col>
          <el-col :span="16">
            <el-input placeholder="洪湖渔家小龙虾49.9元" prefix-icon="el-icon-search" class="mysearch"></el-input>
          </el-col>
          <el-col :span="4" class="login-bar">
            <el-button type="text" @click="goto('/login')" class="login">登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <div id="nav">
        <div class="list">
          <ul class="tab1">
            <li>
              <a>推荐</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
            <!-- <li style="width:26%;"><img src="https://image3.benlailife.com/AppHomePageImage/896d8544-e134-14c1-1460-398967aa7ba4.jpg" style="width:60px;height:30px;display=inlin-block"></li> -->
            <li>
              <a>水果</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
            <li>
              <a>水果</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
          </ul>
          <ul class="tab2">
            <li>
              <a>推荐</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
            <li>
              <a>水果</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
            <li>
              <a>水果</a>
            </li>
            <li>
              <a>推荐</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="main">
      <div class="banner">
        <el-carousel class="lbt">
          <el-carousel-item v-for="item in imgs" :key="item.id">
            <div class="lbt-item">
              <img :src="item.img">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <ul class="tabhui">
          <li>
            <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          <li>
            <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          </li>
          <li>
          <img src="../img/hui.png">
          </li>
        </ul>


      <ul class="tab3" title="新人注册">
        <li style="background:yellow;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:red;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:blue;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:green;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:pink;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:red;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:pink;height:0.38rem;">
          <a>
            <img src="" alt="">
          </a>
        </li>
        <li style="background:green;height:0.38rem;">
          <a>
            <img src>
          </a>
        </li>
      </ul>

      <ul class="tab4">
        <li>
          <img src="../img/zhenjiapei.png">
        </li>
        <li>
          <img src="../img/zhenjiapei.png">
        </li>
        <li>
          <img src="../img/zhenjiapei.png">
        </li>
      </ul>

        <ul class="tab5">
          <li>
            <img src="../img/yueka.png">
          </li>
          <li>
          <img src="../img/yueka.png">
          </li>
          <li>
          <img src="../img/yueka.png">
          </li>
          <li>
          <img src="../img/yueka.png">
          </li>
        </ul>

      <ul class="tab4" title="28张龙虾观音">
        <li>
          <img src="../img/tieguanyin.png" class="tu-zhen">
        </li>
        <li>
          <img src="../img/tieguanyin.png" class="tu-zhen">
        </li>
        <li>
          <img src="../img/tieguanyin.png" class="tu-zhen">
        </li>
      </ul>

      <div class="title">
        <img src="../img/mqjtitle.png">
      </div>
      <ul class="tab4" title="28张母亲节">
        <li>
          <img src="../img/muqin.png" class="tu-zhen">
        </li>
        <li>
          <img src="../img/muqin.png" class="tu-zhen">
        </li>
        <li>
          <img src="../img/muqin.png" class="tu-zhen">
        </li>
      </ul>

      <div class="title" title="原产地水果">
        <img src="../img/mqjtitle.png">
      </div>
      <div class="cartlist">
        <ul>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cart-tu.png" alt="">
            <p>海南龙眼 1kg装</p>
            <div class="price">
              <p>
                <span>￥42.8</span>
              </p>
              <del>￥69.8</del>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="title" title="甜的我心水果">
        <img src="../img/mqjtitle.png">
      </div>
      <div class="cartUnit">
        <ul>
          <li>
            <img src="../img/cartUnit.png">
            <div class="info">
              <h4>墨西哥牛油果 10个装（1.4kg以上）</h4>
              <p class="content">
                森林奶油 粮食水果
              </p>
              <p class="method">冷链配</p>
              <p class="price"><span>￥99.0</span> <del>￥169</del></p>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cartUnit.png">
            <div class="info">
              <h4>墨西哥牛油果 10个装（1.4kg以上）</h4>
              <p class="content">
                森林奶油 粮食水果
              </p>
              <p class="method">冷链配</p>
              <p class="price"><span>￥99.0</span> <del>￥169</del></p>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
          <li>
            <img src="../img/cartUnit.png">
            <div class="info">
              <h4>墨西哥牛油果 10个装（1.4kg以上）</h4>
              <p class="content">
                森林奶油 粮食水果
              </p>
              <p class="method">冷链配</p>
              <p class="price"><span>￥99.0</span> <del>￥169</del></p>
              <i><img src="../img/cart_icon.png" alt=""></i>
            </div>
          </li>
        </ul>
      </div>

    </div>

    
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      imgs: [
        {
          id: 1,
          img: "img/jingjing.jpg"
        },
        {
          id: 2,
          img: "img/laoxie.jpg"
        },
        {
          id: 3,
          img: "img/lemon.jpg.jpg"
        },
        {
          id: 4,
          img: "img/laoyao.jpg.jpg"
        },
        {
          id: 5,
          img: "img/malin.jpg.jpg"
        },
        {
          id: 6,
          img: "img/tingting.jpg"
        }
      ]
      // imgs:['img/jingjing.jpg','img/laoxie.jpg','img/lemon.jpg','img/laoyao.jpg','img/malin.jpg','img/tiantian.jpg','img/tingting.jpg']
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: #fec849;
  .header {
    width: 100%;
    padding: 0.08rem 0.08rem 0rem 0.08rem;
    height: 0.36rem;
    background: #fec849;
    position: relative;
    .dizhi {
      display: block;
      font: 400 0.17rem/0.44rem "黑体";
      padding: 0rem 0.28rem 0rem 0.15rem;
      background: url(//image.benlailife.com/static/images/top/top_new_98624a41.png)
        right -0.105rem no-repeat;
      background-size: 0.23rem 5.37rem;
      color: #333;
    }
    el-input.mysearch {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 0.3rem;
    }
    .login {
      display: block;
      min-width: 0.6rem;
      font: 400 0.15rem/0.44rem "黑体";
      color: #9dd300;
      text-align: center;
      padding: 0rem 0.1rem;
      box-sizing: border-box;
    }
  }
  #nav {
    display: block;
    width: 100%;
    background: #fff;
    height: 0.4rem;
    overflow-x: scroll;
    position: relative;

    .list {
      width: 100%;
      display: flex;
      ul {
        flex: none;
        width: 100%;
        height: 0.35rem;
        overflow-x: auto;
        overflow-y: hidden;
        display: flex;
        position: relative;
        li {
          width: 13%;
          padding: 0.09rem 0.06rem;
          float: left;
          a {
            display: block;
            color: #666;
            font-size: 0.13rem;
            text-align: center;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}

#main {
  margin-top: 1rem;
  display: block;
  flex: 1;
  overflow-x: hidden;
  .lbt {
    img {
      width: 100%;
      height: 280px;
    }
    .lbt-item {
      position: relative;
    }
  }
  .tabhui{
    width: 100%;
    overflow: hidden;
     display: flex;
     flex-wrap: wrap;
    background:yellow;
      li{
      width:25%;
      height: 0.79rem;
    }
  }
  .tab3 {
    flex: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      height: 0.345rem;
    }
  }
  .tab4 {
    width:100%;
    overflow: hidden;
    li{
      height: 1.5rem;
    }
  }
  .title {
    width: 100%;
    height: 0.62rem;
  }
  .tab5{
    width: 100%;
    height: 2.4rem;
     display: flex;
     flex-wrap: wrap;
    background:yellow;
      li{
      width:50%;
      height: 1.2rem;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .cartlist{
    width:100%;
    height:6.3rem;
    display: block;
    padding-bottom:10px;
    ul{
      width:100%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      position: relative;
        li{
          width:33.3%;
          height: 2.19rem;  
          img{
            width:1.27rem;
            height:1.27rem;
          }
          p{
            padding:0 0 0 0.1rem;
            text-align: left;
            font-size: .12rem;
            height: .22rem;
            line-height: .08rem;
            padding-top: .06rem;
          }
          .price{
            text-align: left;
            height: 0.08rem;
            line-height: .08rem;
            position: relative;
            span{
              font-size: .16rem;
              color:#ff6900;
            }
            del{
              padding:0 0 0 0.12rem;
              font-size:0.02rem;
            }
            i{
              display: block;
              position:absolute;
              right:0.24rem;
              bottom:-0.28rem;
             img{width:0.24rem;height:0.19rem;}
            }
          }
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
          float: left;
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
              position: absolute;
              z-index: 10;
              left: 0;
              bottom: -.04rem;
              font-size: .12rem;
              color: #ff6900;
              line-height: .2rem;
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


