<template>

<el-row :gutter="20">
  <el-col :span="18" class="logoside">
      <img src="../img/logo.jpg" alt="benlai.com" class="logoimg">
      <h1>本来生活XX后台管理系统</h1>
  </el-col>
  <el-col :span="6" class="loginside">
        <el-button type="warning" icon="el-icon-s-unfold" circle></el-button>
        <el-button type="success" icon="el-icon-message" circle></el-button>
        <el-button type="info" icon="el-icon-message-solid" circle></el-button>
        <el-dropdown>
              <span class="el-dropdown-link" style="color:#fff;font-size:16px;">
                <i class="el-icon-s-tools el-icon--right"></i>
                欢迎您！
                <span>{{user}}</span>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span @click="myinfo">
                  个人信息
                  </span>
                  </el-dropdown-item>
                <el-dropdown-item>
                  <span>
                  成交统计
                  </span>
                  </el-dropdown-item>
                <el-dropdown-item divided >
                  <span @click="signout">
                  退出登录
                  </span> </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
  </el-col>
</el-row>

</template>

<script>
export default {
  data(){
    return {
      user:''
    }
  },
  created(){
    this.getuser()
  },
methods: {
  getuser(){
    console.log('aaa',this.$route.query.user)
      this.user = this.$route.query.user
    },
    signout() {
      this.$router.push("/login");
    },
    myinfo() {
      this.$router.push("/home/myinfo");
    }
  }
}
</script>

<style>
.logoside{
    padding: 10px 0;
    font-size: 20px;
}
.logoside h1{
   display: block;
   float: left;
   margin: 0;
    color: #fff;
    font-weight: bold;
    line-height: 40px;
   font-size: 20px;
}
.logoimg{
    display: block;
    float: left;
    width: 40px;
    margin-right: 10px;
}
.loginside{
    padding: 10px 0;
    font-size: 20px;
}

</style>
