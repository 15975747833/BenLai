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
}
</style>