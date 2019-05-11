<template>
  <div class="login_reg">
    <el-row type="flex" class="row-bg header">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <i class="el-icon-arrow-left header-back" @click="goto('/home')"></i>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light header-text">登录</div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane label="登录">
        <el-form
          :model="ruleForm_login"
          :rules="rules"
          ref="ruleForm_login"
          label-width="80px"
          class="demo-ruleForm_login"
        >
          <el-form-item label="用户名" prop="username_login">
            <el-input v-model="ruleForm_login.username_login"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="psw_login">
            <el-input v-model="ruleForm_login.psw_login" :show-password="true"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm_login('ruleForm_login')">提交</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" :stretch="true">
        <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"> -->
        <el-form
          :model="ruleForm_reg"
          :rules="rules"
          ref="ruleForm_reg"
          label-width="80px"
          class="demo-ruleForm_reg"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm_reg.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="psw">
            <el-input v-model="ruleForm_reg.psw" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="comfirmPsw">
            <el-input v-model="ruleForm_reg.comfirmPsw" :show-password="true"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm_reg')">提交</el-button>
            <el-button @click="resetForm('ruleForm_reg')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data() {
    // value为comfirm的值
    let checkPsw = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm_reg.psw) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 向后端校验用户名是否存在
    let checkUsername = (rule, value, callback) => {
      this.$axios
        .get("http://193.112.60.97:19011/reg/check", {
          params: {
            username: value
          }
        })
        .then(({ data }) => {
          if (data.status === 200) {
            //直接调用回调函数==放行
            callback();
          } else if (data.status === 400) {
            callback(new Error("用户名已存在"));
          }
        });
    };
    return {
      ruleForm_login: {
        username_login: "",
        psw_login: ""
      },
      ruleForm_reg: {
        username: "",
        psw: "",
        comfirmPsw: ""
      },
      rules: {
        username_login: [
          // { validator: validatePass, trigger: 'blur' },
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "用户名长度在 6 到 11 个字符",
            trigger: "blur"
          }
        ],
        psw_login: [
          { required: true, message: "请输入密码 ", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "密码长度在 6 到 11 个字符",
            trigger: "blur"
          }
        ],
        username: [
          // { validator: validatePass, trigger: 'blur' },
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 11,
            message: "长度在 6 到 11 个字符",
            trigger: "blur"
          },
          // 用户名虚焦时，向后端发起请求用户名是否重复
          {
            validator: checkUsername,
            trigger: "blur"
          }
        ],
        psw: [
          { required: true, message: "请输入密码 ", trigger: "blur" },
          { min: 6, max: 11, message: "长度在 6 到 11 个字符", trigger: "blur" }
        ],
        comfirmPsw: [
          { required: true, message: "请再次输入密码 ", trigger: "blur" },
          {
            validator: checkPsw,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 登陆提交按钮===========================
    submitForm_login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //通过前端验证，向后端发起请求，校验用户名和密码是否正确

          let {
            username_login,
            psw_login: password_login
          } = this.ruleForm_login;

          /* eslint-disable */
          console.log("加密前2：", password_login);
          // 对password_login进行加密
          let key = "laoxie1234567890"; //密钥
          let iv = "laoxielaoxie6666"; //初始向量
          key = CryptoJS.enc.Utf8.parse(key);
          iv = CryptoJS.enc.Utf8.parse(iv);
          var encrypted = CryptoJS.AES.encrypt(password_login, key, { iv });
          password_login = encrypted.toString(); //返回的是base64格式的密文（后端要与之匹配）
          /* eslint-disable */
          console.log("加密后2：", password_login);

          let params = {
            username: username_login,
            password: password_login
          };
          this.$axios
            .get("http://193.112.60.97:19011/login", {
              params
            })
            .then(({ data }) => {
              if (data.status == 200) {
                // 登陆成功将用户名和登陆状态存入localStorage---------------
                localStorage.setItem("username", username_login);
                localStorage.setItem("loginStatus", true);
                this.$message("登录成功");
                this.$router.push("/home");
                // console.log(this.$route.query===null)
                //如果从登陆页面直接进去，登陆后跳转到首页;从'登陆按钮'进去，登陆后跳到首页

                // if(this.$route.query){
                //   this.$router.replace(this.$route.query.redirect);
                // }else{
                //   this.$router.replace('/hone');
                // }
                // this.$router.replace(this.$route.query.redirect);
              } else if (data.status == 400) {
                this.$message("用户名或密码有误");
              }
              console.log("login", data);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 注册提交按钮==============================
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          let { username, psw: password } = this.ruleForm_reg;
          // 对password进行加密
          let key = "laoxie1234567890"; //密钥
          let iv = "laoxielaoxie6666"; //初始向量
          key = CryptoJS.enc.Utf8.parse(key);
          iv = CryptoJS.enc.Utf8.parse(iv);
          var encrypted = CryptoJS.AES.encrypt(password, key, { iv });
          password = encrypted.toString(); //返回的是base64格式的密文（后端要与之匹配）
          // 发起请求-向数据库存入数据
          this.$axios
            .post("http://193.112.60.97:19011/reg", { username, password })
            .then(({ data }) => {
              if (data.status == 200) {
                this.$message("注册成功");
                // 注册成功将用户名和登陆状态存入localStorage---------------
                localStorage.setItem("username", username);
                localStorage.setItem("loginStatus", true);
                // 注册后跳到首页
                this.$router.replace("/home");

                // this.$router.replace(this.$route.params.redirect);
              }else{
                this.$message("数据库正在维护，请等下注册哈~");
              }
            });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    //注册页重置按钮===================
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goto(path) {
      console.log("x", path);
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss">
.login_reg {
  .header-back {
    height: 0.44rem;
    font-size: 0.17rem;
    line-height: 0.44rem;
    padding: 0 0.1rem;
  }
  .header-text {
    text-align: center;
    color: #000;
    font-size: 0.17rem;
    line-height: 0.44rem;
    height: 0.44rem;
    padding: 0 0.44rem;
    box-sizing: border-box;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
  }
}
</style>
