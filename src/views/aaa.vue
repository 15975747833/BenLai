<template>
  <div class="login-page">
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
      <el-tabs type="border-card">
        <el-tab-pane label="登陆">
          <el-form
            :model="ruleForm_login"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="login_username" >
              <el-input v-model="login_username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="login_psw">
              <el-input type="password" v-model="ruleForm.login_psw" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="login_checkPass">
              <el-input type="password" v-model="ruleForm.login_checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
             
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="账号" prop="age" >
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
             
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
<!-- 原来的样式 start -->
      <!-- <el-row>
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
      </div>-->
      <!-- 原来的样式 end -->
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      // rules: {
        // pass: [{ validator: validatePass, trigger: "blur" }],
      //   checkPass: [{ validator: validatePass2, trigger: "blur" }],
      //   age: [{ validator: checkAge, trigger: "blur" }]
      // }
    };
    // return {
    //   keyword: ""
    // };
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
    
    .el-form-item{
      label.el-form-item__label{
        width:.8rem;
      }
      .el-form-item__content{

      }

    }
    // .myform {
    //   padding: 0.1rem;
    //   #username,
    //   #password {
    //     border: 0px;

    //     &:focus {
    //       outline: none;
    //     }
    //   }
    // }
    // .login__button {
    //   .login__prompt {
    //     font-size: 0.12rem;
    //     color: #999;
    //     line-height: 0.35rem;
    //     text-align: left;
    //     padding-left: 0.19rem;
    //   }
    //   .all_btn_green {
    //     background: #ddd;
    //     color: #fff;
    //     width: 98%;
    //     line-height: 0.44rem;
    //     display: block;
    //     text-align: center;
    //     font-size: 0.16rem;
    //     border-radius: 0.04rem;
    //     margin: 0 auto;
    //   }
    // }
  }
}
</style>
