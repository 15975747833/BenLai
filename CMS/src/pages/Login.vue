<template>
<div>
      <div class="reg_page" v-show="regstatus">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username">
            <el-input placeholder="用户名" v-model="ruleForm.username">
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="ruleForm.password" type="password" show-password>
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="确认密码" v-model="ruleForm.confirmpassword" type="password" show-password>
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item class="loginbtn">
            <el-button type="success" style="width:300px;" @click="reg('ruleForm')">注册</el-button>
            
          </el-form-item>
          <el-form-item>
            <p>已经注册？<span style="color:#00f" @click="gotologin">立即登录</span></p>
          </el-form-item>
        </el-form>
      </div>

      <div class="login_page" v-show="logstatus">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="username2">
            <el-input placeholder="用户名" v-model="ruleForm.username2">
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="ruleForm.password" type="password" show-password>
              <i slot="prefix" class="el-icon-lock"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="autoLogin">
              <el-switch v-model="ruleForm.autoLogin"></el-switch>
              <span>七天免登陆</span>
            </el-form-item>
          <el-form-item class="loginbtn">
            <el-button type="success" style="width:300px;" @click="login('ruleForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <p>还没注册？<span style="color:#00f" @click="gotoreg">立即注册</span> </p>
          </el-form-item>
        </el-form>
      </div>

</div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import CryptoJS from 'crypto-js';
export default {
  data() {
    var confirmpassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkUsername = (rule, value, callback) => {
      this.$axios.get('/api/reg/check',{
          params:{
              username:value
          }
      }).then(({data})=>{
          if(data.status===200){
              callback();
          }else if(data.status==400){
              callback(new Error("用户名已存在"));
          }
      })
    };
    return {
      ruleForm: {
        password: "",
        confirmpassword: "",
        username: "",
        username2:"",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
          {
            validator: checkUsername,
            // message: "两次输入密码不一致",
            trigger: "blur"
          }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirmpassword: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            validator: confirmpassword,
            // message: "两次输入密码不一致",
            trigger: "blur"
          }
        ]
      },
      regstatus:true,
      logstatus:false,
    };
  },
  methods: {
     reg(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        // 是否通过验证
        if (valid) {
          this.$message("注册成功");
          // 发起请求，写入数据成功后跳转登录页面
          let {username,password} = this.ruleForm;

          console.log('加密前：',password)

          // 对password进行加密
          let key = 'laoxie1234567890';//密钥
          let iv = 'laoxielaoxie6666';//初始向量

          key  = CryptoJS.enc.Utf8.parse(key);
          iv   = CryptoJS.enc.Utf8.parse(iv);
          var encrypted =CryptoJS.AES.encrypt(password,key,{iv});
          password = encrypted.toString();    //返回的是base64格式的密文（后端要与之匹配）

          console.log('加密后：',password)
          this.$axios
            .post("/api/reg", { username, password})
            .then(({ data }) => {
              console.log(data);
              this.regstatus = false;
              this.logstatus = true;
              // this.$router.replace("/home/home2");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    gotologin(){
        this.regstatus = false;
        this.logstatus = true;
    },
    gotoreg(){
         this.regstatus = true;
        this.logstatus = false;
    },
    login(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        // 是否通过验证
        if (valid) {
          let {username2,password,autoLogin} = this.ruleForm;

           console.log('加密前：',password)

          // 对password进行加密
          let key = 'laoxie1234567890';//密钥
          let iv = 'laoxielaoxie6666';//初始向量

          key  = CryptoJS.enc.Utf8.parse(key);
          iv   = CryptoJS.enc.Utf8.parse(iv);
          var encrypted =CryptoJS.AES.encrypt(password,key,{iv});
          password = encrypted.toString();    //返回的是base64格式的密文（后端要与之匹配）

          console.log('加密后：',password)

          
          let params = {
              username:username2,
              password
            }
          if(autoLogin){
            params.autoLogin = 1
          }
          this.$axios.get('/api/login',{
            params
          }).then(({data})=>{
            if(data.status===200){
              this.$message("登录成功");
              this.$router.replace('/home/home2?user='+username2);

              if(typeof data.data === 'string'){

                // 保存token
                localStorage.setItem('Authorization',data.data);
              }
            }else{
              this.$message("用户名或密码错误");
            }
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
.reg_page,.login_page {
  width: 300px;
  height: 250px;
  padding: 30px;
  border: 1px solid #eee;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.el-form {
  margin-left: -100px;
}
.loginbtn{
  margin-bottom: 5px;
}
.el-form-item__content {
    line-height: 12px;
    position: relative;
    font-size: 12px;
}
.el-form-item__content p{
    margin: 5px;
}
.el-icon-lock,.el-icon-user{
  font-size: 20px;
  line-height: 40px;
}

</style>



