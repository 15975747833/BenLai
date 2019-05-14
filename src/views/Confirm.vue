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
          <h1 class="mint-header-title">确认订单</h1>
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
        <p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>

        </p>
        <p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>

        </p>
        <p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>

        </p>
        <p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>

        </p>
        <p>
         <el-input v-model="input" placeholder="请输入内容"></el-input>

        </p>
      </el-main>
     
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    let { buyer,orderNum, gdArr } = this.$route.params;
    console.log('canshu',buyer,orderNum, gdArr )
    //  this.$axios
    //         .post("http://193.112.60.97:19011/order", { buyer,orderNum, gdArr })
    //         .then(({ data }) => {
    //           alert('已创建订单')
    //           localStorage.removeItem('cartData');
    //           this.$store.commit("removeFromCart", {goodslist:"goodslist"});
    //           this.$router.push({ name: "Home"});   
    //   });

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
