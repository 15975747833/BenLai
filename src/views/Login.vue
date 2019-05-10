<template>
  <el-container class="login-page">
    <el-header style="height:0.44rem">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple">&lt;</div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple">登陆</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple active">手机快捷登陆</div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">账号密码登陆</div>
        </el-col>
      </el-row>
      <div class="myform">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input placeholder="请选择日期" id="username" style="border:0;" v-model="keyword">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <el-button>默认按钮</el-button>
            </div>
          </el-col>
        </el-row>

        <el-input placeholder="请选择日期" id="password">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="login__button">
        <p class="login__prompt">未注册过的手机将自动保存为本来账户</p>
        <a href="#" class="all_btn_green all_btn_xl all_btn_gray" id="fastLoginBt">登录</a>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  }
};
</script>
   
<style lang="scss">
.login-page {
  .el-header {
    padding: 0;
    text-align: center;
    .el-row {
      text-align: center;
      color: #000;
      font-size: 0.17rem;
      line-height: 0.44rem;
      height: 0.44rem;
      //   padding: 0 0.44rem;
      border-bottom: 1px solid #f2f2f2;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      overflow: hidden;
    }
  }
  .el-main {
    padding: 0;
    text-align: center;

    .el-row {
      margin: 0.1rem;
      // border-bottom: 1px solid #ccc;

      .el-col-12 {
        line-height: 0.44rem;
        font-size: 0.14rem;
        .active {
          background-color: #f2f2f2;
        }
      }
    }
    .myform {
      padding: 0.1rem;
      #username,
      #password {
        border: 0px;

        &:focus {
          outline: none;
        }
      }
    }
    .login__button {
      .login__prompt {
        font-size: 0.12rem;
        color: #999;
        line-height: 0.35rem;
        text-align: left;
        padding-left: 0.19rem;
      }
      .all_btn_green {
        background: #ddd;
        color: #fff;
        width: 98%;
        line-height: 0.44rem;
        display: block;
        text-align: center;
        font-size: 0.16rem;
        border-radius: 0.04rem;
        margin:0 auto;
      }
    }
  }
}
</style>
