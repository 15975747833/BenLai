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
          <a href="javascript:void(0);">
            <i class="el-icon-delete-location"></i> 广东省佛山市
          </a>
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-main>

      <el-col>
        <div
          class="cart-list"
          style="background:#efefef;"
          v-for="item in goods"
          :key="item.goodsNum"
        >
          <div class="cart-title">
            <el-checkbox class="allCheck">{{item.promotionsTags}}</el-checkbox>
            <span>包邮</span>
          </div>
          <el-row :gutter="20" class="cart-content">
            <el-col :span="2">
              <el-checkbox class="unitCheck"></el-checkbox>
            </el-col>
            <el-col :span="7" class="goodstu">
              <img :src="item.imageUrl" style="width:100%">
            </el-col>
            <el-col :span="15">
              <p class="name">{{item.productName}}</p>
              <p class="price">
                <span>￥{{item.proPrice}}</span>
                <el-input-number
                  v-model="item.qty"
                  @change="changeqty($event,item.goodsNum)"
                  :min="1"
                  :max="10"
                  label="描述文字"
                ></el-input-number>
              </p>
            </el-col>
          </el-row>
        </div>
      </el-col>

      <el-col>
        <div class="recommend">
          一
          <span>为你推荐</span>一
        </div>

        <div class="cartTab">
          <ul style="padding-bottom:0.5rem;">
            <li v-for="item in tuijian" :key="item.goodsNum">
              <img :src="item.imageUrl" alt>
              <p class="name">{{item.productName}}</p>
              <div class="price">
                <p>
                  <span>￥{{item.price.price}}</span>
                </p>
                <del>￥{{item.price.origPrice}}</del>
                <i>
                  <img src="../img/cart_icon.png" alt>
                </i>
              </div>
            </li>
          </ul>

          <el-footer class="payFooter">
            <el-row :gutter="10">
              <el-col :span="12">
                <el-checkbox class="all">全选</el-checkbox>
              </el-col>
              <el-col :span="7" class="calNum yangshi">
                合计
                <span class="totalPrice">￥{{totalPrice}}</span>
              </el-col>
              <el-col :span="5" class="yangshi2">
                <p class="pay">
                  <span @click="goto">
                    去结算
                    <b class="yunfei">(运费0元)</b>
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
export default {
  data() {
    return {
      goods: null,
      tuijian: null,
      num: 1
    };
  },
  created() {
    let aa = JSON.parse(localStorage.getItem("cartData"));
    let bb = [];
    for (var i = 0; i < aa.length; i++) {
      bb[i] = aa[i];
      bb[i].promotionsTags = aa[i].promotionsTags[0][0];
    }
    this.goods = bb;
    let type = this.goods[0].type;

    //请求数据渲染推荐商品
    this.$axios
      .get("http://193.112.60.97:19011/goodslist", {
        params: {
          type
        }
      })
      .then(res => {
        let { data } = res;
        this.tuijian = data;
        console.log(this.tuijian);
        console.log("this.$store=", this.$store);

        this.$store;
      });
  },
  computed:{
        totalPrice(){
            return this.$store.state.goodslist.reduce((prev,item)=>prev+item.proPrice*item.qty,0)
        }
    },
  methods: {
    goto(goods) {
      let aa = 123;
      if (aa) {
        this.$router.push({
          name: "Pay",
          params: { goodsNum: goods.goodsNum }
        });
      } else {
        console.log(666);
        // this.$router.push({ name: "Login", params: { goodsNum: goods.goodsNum } });
      }
    },
    changeqty(value, id) {
      console.log(value, id);
      this.goods.forEach(item => {
        console.log("item.goodsNum=", item.goodsNum);
        if (item.goodsNum === id) {
          
            console.log(777)
            let goodsNum = item.goodsNum
            this.$store.commit("changeQty", { goodsNum, qty: value });
        }
      });
    }
  }
};
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
      display: flex;
      a {
        padding: 0 0.3rem 0 0.34rem;
        font-size: 0.14rem;
        line-height: 0.4rem;
        height: 0.4rem;
        color: #999;
        flex: 3;
      }
      i {
        font-size: 0.14rem;
        line-height: 0.4rem;
        height: 0.4rem;
        flex: 1;
      }
    }
  }
  .cart-list {
    width: 100%;
    overflow: hidden;
    .cart-title {
      padding: 0.18rem 0.12rem;
      span {
        display: block;
        float: right;
      }
    }
    .cart-content {
      width: 100%;
      padding: 0.2rem 0rem 0.2rem 0.22rem;
      .el-col {
        position: relative;
        min-height: 0.9rem;
        .unitCheck {
          line-height: 0.9rem;
        }
        img {
          width: 0.9rem;
          height: 0.9rem;
        }
        .name {
          font-size: 0.13rem;
        }
        .price {
          width: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
          span {
            font-size: 0.12rem;
            height: 0.28rem;
            color: #ff6900;
            vertical-align: bottom;
            padding-right: 0.65rem;
          }
          .el-input-number {
            height: 0.2rem;
          }
        }
      }
    }
  }
  .recommend {
    font-size: 0.14rem;
    font-weight: bold;
    text-align: center;
    span {
      font-size: 0.16rem;
      margin: 0 0.1rem;
    }
  }
  .cartTab {
    width: 100%;
    height: 6.3rem;
    display: block;
    padding-bottom: 0.1rem;
    ul {
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      li {
        width: 50%;
        height: 2.19rem;
        img {
          padding: 0 0.17rem;
          width: 1.27rem;
          height: 1.27rem;
        }
        p {
          padding: 0 0 0 0.1rem;
          text-align: left;
          font-size: 0.12rem;
          height: 0.22rem;
          line-height: 0.08rem;
          padding-top: 0.06rem;
        }
        .price {
          text-align: left;
          height: 0.08rem;
          line-height: 0.08rem;
          position: relative;
          span {
            font-size: 0.16rem;
            color: #ff6900;
          }
          del {
            padding: 0 0 0 0.12rem;
            font-size: 0.02rem;
          }
          i {
            display: block;
            position: absolute;
            right: 0.24rem;
            bottom: -0.28rem;
            img {
              width: 0.24rem;
              height: 0.19rem;
            }
          }
        }
      }
    }
    .payFooter {
      width: 100%;
      height: 0.8rem;
      position: fixed;
      z-index: 100;
      right: 0;
      bottom: 0;
      background: #fff;
      .all {
        padding: 0.16rem 0 0.16rem 0.08rem;
      }
      .yangshi {
        margin: 0.16rem 0rem 0.16rem 0rem;
      }
      .yangshi2 {
        padding: 0.08rem 0.06rem 0.16rem 0.08rem;
      }
      .calNum {
        width: 0.95rem;
        height: 0.3rem;
        span {
          color: #ff6900;
        }
      }
      .pay {
        display: block;
        span {
          color: #fff;
          width: 1rem;
          height: 0.4rem;
          font-size: 0.12rem;
          display: block;
          text-align: center;
          line-height: 0.16rem;
          background: #ff5e00;
          b.yunfei {
            display: block;
            font-size: 0.08rem;
            line-height: 0.16rem;
          }
        }
      }
    }
  }
}
</style>
