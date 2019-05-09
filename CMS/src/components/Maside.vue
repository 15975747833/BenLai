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
        <el-menu-item index="3-1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-flag"></i>
          <span>库存管理</span>
        </template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>用户列表</span>
        </template>
        <el-menu-item index="5-1">选项1</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">
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
