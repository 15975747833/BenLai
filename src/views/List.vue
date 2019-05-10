<template>
  <div>
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
        <el-col :span="16">
          <el-input placeholder="洪湖渔家小龙虾49.9元" prefix-icon="el-icon-search" class="mysearch"></el-input>
        </el-col>

        <div class="mint-header-button is-right">
          <span class="cart-icon">购物车</span>
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-more"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </div>
      </header>
    </el-header>

    <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="date"
      label="综合"
      sortable
      width="90">
    </el-table-column>
    <el-table-column
      prop="name"
      label="价格"
      sortable
      width="90">
    </el-table-column>
     <el-table-column
      prop="name"
      label="销量"
      sortable
      width="90">
    </el-table-column>
    <el-table-column
      prop="address"
      label="筛选"
      :formatter="formatter">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
    export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
   
  }
</script>

<style lang="scss" scoped>
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
</style>