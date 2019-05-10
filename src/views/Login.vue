
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="注册">
      <!-- <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign"> -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psw">
          <el-input v-model="ruleForm.psw"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="comfirmPsw">
          <el-input v-model="ruleForm.comfirmPsw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="登陆">配置管理</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    // value为comfirm的值
    let checkPsw = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.psw) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    // 向后端校验用户名是否存在
    let checkUsername = (rule, value, callback) => {
      this.axios
        .get("http://193.112.60.97:19011/reg/check", {
          params: {
            username: value
          }
        })
        .then(res => {
          console.log("reg", res);
        });
      // if (value === "") {
      //   callback(new Error("请再次输入密码"));
      // } else if (value !== this.ruleForm.psw) {
      //   callback(new Error("两次输入密码不一致!"));
      // } else {
      //   callback();
      // }
    };
    return {
      ruleForm: {
        username: "",
        psw: "",
        comfirmPsw: ""
      },
      rules: {
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
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          this.$message("注册成功");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>