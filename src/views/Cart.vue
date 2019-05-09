<template>
  <div>
    <el-container>
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
          <h1 class="mint-header-title">购物车</h1>
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
      <el-main>
        <div class="ad">
          <a href="javascript:void(0);"><i class="el-icon-delete-location"></i> 广东省佛山市</a>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-main>
      <el-col>
          <div class="cart-list">
              <div class="cart-title">
                  <el-checkbox class="allCheck">冷链配送</el-checkbox>
                  <span>包邮</span>
              </div>
              <el-row :gutter="20" class="cart-content">
                <el-col :span="2"><el-checkbox class="unitCheck"></el-checkbox></el-col>
                <el-col :span="6" class="goodstu"><img src="../img/hui.png" ></el-col>
                <el-col :span="16">
                    <h4 class="name">台湾茂谷柑1kg装</h4>
                    <p class="price">
                        <span>￥36.9</span>
                        <el-input-number :min="1" :max="5" label="数量" size="mini">2</el-input-number>
                    </p>   
                </el-col>
              </el-row>
          </div>      
      </el-col>
      <el-col>
          <div class="recommend">一<span>为你推荐</span>一</div>
          <div class="cartTab">
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
            </ul>
            <el-footer class="payFooter">
                 <el-row :gutter="10">
                    <el-col :span="12"><el-checkbox class="all">全选</el-checkbox></el-col>
                    <el-col :span="7" class="calNum yangshi">
                        合计
                        <span class="totalPrice">￥92.5</span>
                    </el-col>
                    <el-col :span="5" class="yangshi2">
                        <p class="pay">
                            <span>去结算
                            <b class="yunfei">(运费10元)</b>
                            </span>
                        </p>
                        
                        
                    </el-col>
                </el-row>
            </el-footer>
          </div>     
      </el-col>
        
    </el-container>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-container {
  .el-header {
    .cart {
      width: 100%;
      height: 0.44rem;
      font: 400 0.18rem/0.44rem "黑体";
      color: #000;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
  }
  .el-main {
    padding: 0;
    .ad {
      background-color: #fff;
      box-shadow: 0 0 5px #bbb;
      display:flex;
      a {
        padding: 0 0.3rem 0 0.34rem;
        font-size: 0.14rem;
        line-height: 0.4rem;
        height: 0.4rem;
        color: #999;
        flex:3;
      }
      i{
        font-size: 0.14rem;
        line-height: 0.4rem;
        height: 0.4rem;
        flex:1;
      }
    }
  }
  .cart-list{
      width:100%;
      overflow: hidden;
      .cart-title{
          padding:0.18rem 0.12rem;
          span{display:block;float:right;}
      }
      .cart-content{
          width:100%;
          padding:0.2rem 0rem 0.2rem 0.22rem;
          .el-col{
            position: relative;min-height:0.9rem;
            .unitCheck{
             line-height: 0.9rem;
          }
          img{
              width:0.9rem;height:0.9rem;
          }
          .name{
              font-size:0.16rem;
          }
          .price{
              width:100%;
              position:absolute;
              right:0;
              bottom:0;
              span{
                  font-size:0.12rem;
                  height:0.28rem;
                  color:#ff6900;
                  vertical-align: bottom;
                  padding-right:0.65rem;
              }
              .el-input-number{
                  height:0.2rem;
              }
          }
          
          }
      }
  }
  .recommend{
      font-size:0.14rem;
      font-weight: bold;
      text-align: center;
      span{
          font-size:0.16rem;
          margin:0 0.1rem;
      }
  }
  .cartTab{
    width:100%;
    height:6.3rem;
    display: block;
     padding-bottom:0.1rem;
    ul{
      width:100%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      position: relative;
        li{
          width:50%;
          height: 2.19rem;  
          img{
            padding:0 0.17rem;
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
    .payFooter{
        // width:100%;
        // height:0.8rem;
        // position:fixed;
        // right:0;
        // bottom:0;
        .all{
            padding:0.16rem 0 0.16rem 0.08rem;
        }
        .yangshi{margin:0.16rem 0rem 0.16rem 0rem;}
        .yangshi2{padding:.08rem .06rem 0.16rem .08rem;}
        .calNum{
            width:0.95rem;
            height:0.3rem;
            span{
                color:#ff6900;
            }  
        }
        .pay{
            display:block;
            span{
                color: #fff;
                width: 1rem;
                height: .4rem;
                font-size: .12rem;
                display:block;
                text-align: center;
                line-height: .16rem;
                background:#FF5E00;
                b.yunfei{
                    display: block;
                    font-size: .08rem;
                    line-height: .16rem;
                }
            }
        }
    }

  }
}

 
</style>
