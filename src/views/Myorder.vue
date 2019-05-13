<template>
  <div>
    <el-container>
      <el-header style="width:100%;height:0.44rem;padding:0;position:fixed;background:#fff;z-index:100;">
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

      <el-main style="margin:0.3rem 0;">
        <el-row v-for="(item,idx) in orderlist" :key="idx" style="margin-top:0.1rem;border:1px solid #cecece;">
          <el-col :span="6">
            <img :src="item.imageUrl" style="width:0.6rem;">
          </el-col>
          <el-col :span="6">
            <p>{{item.productName}}</p>
          </el-col>
          <el-col :span="6">
            <p>￥{{item.proPrice}}</p>
            <p>数量：{{item.qty}}</p>
          </el-col>
          <el-col :span="6">
            <p>下单时间{{item.time}}</p>
          </el-col>
        </el-row>
      </el-main>
     
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
    let { username } = this.$route.params;
    this.$axios
      .get("http://193.112.60.97:19011/order", {
        params: {
          buyer: username
        }
      })
      .then(({ data }) => {
        data.forEach(item => {
          for (var i = 0; i < item.gdArr.length; i++) {
            let aa = {};
            aa.buyer = item.buyer;
            aa.orderNum = item.orderNum;
            aa.imageUrl = item.gdArr[i].imageUrl;
            aa.goodsNum = item.gdArr[i].goodsNum;
            aa.goodsNum = item.gdArr[i].goodsNum;
            aa.proPrice = item.gdArr[i].proPrice;
            aa.productName = item.gdArr[i].productName;
            aa.qty = item.gdArr[i].qty;
            var d = new Date(item.time);
            var arr = "天,一,二,三,四,五,六".split(",");
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            var date = d.getDate();
            var day = d.getDay(); //
            var hour = d.getHours();
            var minute = d.getMinutes();
            var second = d.getSeconds();
            hour = hour < 10 ? "0" + hour : hour;
            minute = minute < 10 ? "0" + minute : minute;
            second = second < 10 ? "0" + second : second;
            let cc = `${year}/${month}/${date} ${hour}:${minute}:${second}`;
            aa.time = cc;
            this.orderlist.push(aa);
          }
        });
        console.log("this.orderlist=", this.orderlist);
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
