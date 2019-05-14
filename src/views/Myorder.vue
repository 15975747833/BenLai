<template>
  <div>
    <el-container>
      <el-header style="height:0.44rem;padding:0;">
        <header class="mint-header cart">
          <div class="mint-header-button is-left">
            <a href="#/my" class="router-link-active">
              <button class="mint-button mint-button--default mint-button--normal">
                <span class="mint-button-icon">
                  <i class="mintui mintui-back"></i>
                </span>
                <label class="mint-button-text"></label>
              </button>
            </a>
          </div>
          <h1 class="mint-header-title">全部订单</h1>
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
        <div class="cartUnit">
          <ul>
            <li v-for="goods in orderlist" :key="goods.sysNo" @click="goto(goods)">
              <img :src="goods.imageUrl">
              <div class="info">
                <h4>{{goods.productName}}</h4>
                <p class="content">{{goods.promotionWord}}</p>
                <p class="price">
                  <span>{{goods.price.price}}</span>
                  <del>{{goods.price.origPrice}}</del>
                </p>
              </div>
            </li>
            <!-- <li>1</li> -->
            <!-- <li>2</li>
            <li>3</li>-->
          </ul>
        </div>

        <!-- <el-row v-for="(item,idx) in orderlist" :key="idx" style="margin-top:0.1rem;">
          <el-col :span="6">
            <p>{{item.orderNum}}</p>
          </el-col>
          <el-col :span="6">
            <p>{{item.productName}}</p>
          </el-col>
          <el-col :span="6">
            <p>{{item.proPrice}}</p>
            <p>{{item.qty}}</p>
          </el-col>
          <el-col :span="6">
            <p>{{item.time}}</p>
          </el-col>
        </el-row>-->
      </el-main>
      <!-- <el-footer class="payFooter">
        <p>hahaha</p>
      </el-footer>-->
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderlist: []
    };
  },
  created() {
    console.log(this.$route.params);
    let { username } = this.$route.params;

    this.$axios
      .get("http://193.112.60.97:19011/order", {
        params: {
          buyer: username
        }
      })
      .then(({ data }) => {
        console.log("data", data);
        // data为全部用户的订单信息，要从中间找出对应用户的信息的订单信息
        // 正常来说在后端返回当前用户的订单信息
        let { username } = this.$route.params;
        console.log("name", username);
        let aa = data.filter(item => item.buyer == "laoxie666");
        console.log("aa", aa);
      // 要拿到当次的订单信息，要从数据库拿，从最好不要存在localstorage
      // 不只有一家店和订单不一定只有一个
      

     

       
        // data.forEach(item => {
        //   for (var i = 0; i < item.gdArr.length; i++) {
        //     let aa = {};
        //     aa.buyer = item.buyer;
        //     aa.orderNum = item.orderNum;
        //     aa.goodsNum = item.gdArr[i].goodsNum;
        //     aa.goodsNum = item.gdArr[i].goodsNum;
        //     aa.proPrice = item.gdArr[i].proPrice;
        //     aa.productName = item.gdArr[i].productName;
        //     aa.qty = item.gdArr[i].qty;
        //     var d = new Date(item.time);
        //     var arr = "天,一,二,三,四,五,六".split(",");
        //     var year = d.getFullYear();
        //     var month = d.getMonth() + 1;
        //     var date = d.getDate();
        //     var day = d.getDay(); //
        //     var hour = d.getHours();
        //     var minute = d.getMinutes();
        //     var second = d.getSeconds();
        //     hour = hour < 10 ? "0" + hour : hour;
        //     minute = minute < 10 ? "0" + minute : minute;
        //     second = second < 10 ? "0" + second : second;
        //     let cc = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
        //     aa.time = cc;
        //     this.orderlist.push(aa);
        //   }
        // });
        // console.log("this.orderlist=", this.orderlist);
      });
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
  .cartUnit {
    ul {
      width: 100;
      overflow: hidden;
      li {
        width: 100%;
        height: 1.26rem;
        position: relative;
        img {
          width: 1rem;
          height: 1rem;
          float: left;
        }
        .info {
          width: auto;
          padding: 15px;
          height: 1rem;
          h4 {
            font-size: 0.14rem;
            color: #000;
            font-weight: normal;
            overflow: hidden;
            height: 0.2rem;
            line-height: 0.2rem;
          }
          .content {
            font-size: 0.12rem;
            color: #999;
            overflow: hidden;
            height: 0.2rem;
            line-height: 0.2rem;
          }
          .method {
            float: left;
            line-height: 0.15rem;
            height: 0.16rem;
            color: #ff6900;
            border: 1px solid #ffdfc7;
            font-size: 0.1rem;
            margin: 0.08rem 0.05rem 0rem 0rem;
            padding: 0rem 0.03rem;
            box-sizing: border-box;
            background-color: #fff4eb;
          }
          .price {
            margin-top: 0.28rem;
            font-size: 0.12rem;
            color: #ff6900;
            span {
              font-size: 0.18rem;
              font-weight: 700;
            }
            del {
              font-size: 0.12rem;
              color: #999;
              margin-left: 0.1rem;
              text-decoration: line-through;
            }
          }
          i {
            display: block;
            position: absolute;
            right: 0.25rem;
            bottom: 0.09rem;
            img {
              width: 0.24rem;
              height: 0.19rem;
            }
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
</style>
