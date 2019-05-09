<template>
  <div class="home_page">
    <el-container>
      <el-header>
        <Mheader></Mheader>
      </el-header>
      
      <el-container class="mymain">
        <el-aside width="200px">
          <Maside></Maside>
        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb class="guild" separator="/">
              <el-breadcrumb-item :to="{ path: '/home/home2' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/home/goodslist' }">列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
            
            <div class="mainscroll">
            <router-view/>
            </div>
          </el-main>
          <el-footer>
            <Mfooter></Mfooter>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Mheader from "../components/Mheader.vue";
import Maside from "../components/Maside.vue";
import Mfooter from "../components/Mfooter.vue";
export default {
  name: "home",
  components: {
    Mheader,
    Maside,
    Mfooter
  }
};
</script>
<style>
.home_page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.mymain {
  flex: 1;
}
.el-header {
  margin: 0;
  background: url("../img/head-bg.png");
}
.el-aside {
  margin: 0;
  background: #545c64;
}
.el-main {
  margin: 0;
  padding: 0;
  background: #fff;
  height: 200px;
}
.mainscroll{
  padding: 10px;
  overflow-y:hidden;
}
.guild{
  background: #eee;
  width: 100%;
  padding: 5px 10px;
  line-height: 20px;
  position:fixed;
  z-index: 100;
}
.el-footer {
  margin: 0;
  background: #545c64;
}
</style>



