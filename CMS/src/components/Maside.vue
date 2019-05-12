<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" router
    >
      <el-menu-item index="/home/home2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/home/goodslist">
        <i class="el-icon-menu"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
      <el-submenu index="/home/goodstype">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商品分类</span>
        </template>
        <el-menu-item index="/home/category">总类别</el-menu-item>
         <el-menu-item index="/home/addgoods">添加商品</el-menu-item>
        <el-menu-item index="/home/goodsnone">紧缺商品</el-menu-item>
      </el-submenu>
        <el-menu-item index="/home/orderlist">
        <i class="el-icon-notebook-1"></i>
        <span>

        订单管理
        </span>
        </el-menu-item>
      <el-menu-item index="/home/userslist">
        <i class="el-icon-s-data"></i>
        <span slot="title">用户列表</span>
      </el-menu-item>
      <el-menu-item index="/home/echart">
        <i class="el-icon-s-data"></i>
        <span slot="title">销售分析</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
