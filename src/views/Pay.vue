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
          <h1 class="mint-header-title">订单信息</h1>
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
        <p>配送地址:广东省广州市天河区千峰教育</p>
        <p>配送时间：工作日</p>
        <div class="myorder">
         
            <el-row v-for="(item,idx) in goods" :key="idx" style="margin-top:0.1rem;">
              <el-col :span="6">
                <img :src="item.imageUrl" style="width:0.8rem">
              </el-col>
              <el-col :span="12">
                <p>{{item.productName}}</p>
                <p>{{item.proPrice}}</p>
              </el-col>
              <el-col :span="6">
                <p>{{item.qty}}</p>
              </el-col>
            </el-row>
         
        </div>
      </el-main>
      <el-footer class="payFooter">
        <el-row :gutter="10">
          <el-col :span="18">
            <p style="line-height:0.6rem">
              应付金额
              <span style="color:#ff5e00;">￥217.9</span>
            </p>
          </el-col>

          <el-col :span="6" class="yangshi2">
            <p class="pay">
              <span @click="getorder" style="line-height:0.4rem">提交订单</span>
            </p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: null
    };
  },
  created() {
    let { goods } = this.$route.params;
    this.goods = goods;
  },
  methods:{
    getorder(){
      console.log('getorder')
      let buyer = localStorage.getItem("username");
      let gdArr = [];
      this.goods.forEach(item => {
        let vv = {}
        vv.goodsNum = item.goodsNum;
        vv.proPrice=item.proPrice;
        vv.qty=item.qty;
        gdArr.push(vv)
      });
      this.$axios
            .post("http://193.112.60.97:19011/order", { buyer, gdArr })
            .then(({ data }) => {
              console.log('添加成功')
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
