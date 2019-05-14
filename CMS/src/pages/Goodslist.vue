<template>
  <div class="my-goodslist">
    <el-row>
      <el-col :span="12">
        <el-button type="info">
          <i class="el-icon-delete"></i>删除
        </el-button>
      </el-col>
      <el-col :span="12">
        <div class="search">
          <el-input placeholder="请输入内容" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-table :data="tableData"  v-loading="loading" style="width: 100%">
      <el-table-column label="全选" type="selection"></el-table-column>
      <el-table-column type='index' label="#" width="50px"></el-table-column>
       <el-table-column prop="goodsNum" label="商品编号"></el-table-column>
      <el-table-column prop="name" label="商品名称"></el-table-column>
      <el-table-column prop="type" label="分类" sortable></el-table-column>
      <el-table-column prop="origPrice" label="原价" sortable></el-table-column>
      <el-table-column prop="price" label="现价" sortable></el-table-column>
      <el-table-column prop="stock" label="库存" sortable></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="date" label="添加时间" sortable></el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="handleDelete(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table> 
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="20"
      layout="total, prev, pager, next"
      :total="goodslist.length">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodslist:[],
      tableData: [],
      Len:null,
       loading:true
    };
  },
   created() {
    // 发起ajax请求，返回promise对象
    this.$axios
      .get("/api/goodslist")
      .then(({data}) => {
        console.log(data);
        var datalist = []
        for(let i=0;i<data.length;i++){
          let aa = {}
          aa.name = data[i].type;
          aa.type = data[i].category;
          aa.status = data[i].status;
          aa.origPrice = data[i].price.origPrice;
          aa.price = data[i].price.price;
          aa.stock = data[i].stock;
          aa.goodsNum = data[i].goodsNum;
          let bb =  data[i].regtime;
          var d = new Date(bb);  
          var year = d.getFullYear();
          var month = d.getMonth()+1;
          var date = d.getDate();
          var hour = d.getHours();
          var minute = d.getMinutes();
          var second = d.getSeconds();
          hour = hour<10? '0'+hour : hour
          minute = minute<10? '0'+minute : minute
          second = second<10? '0'+second : second
          let cc = `${year}/${month}/${date} ${hour}:${minute}:${second}`
          aa.date = cc;
          datalist.push(aa)
        }
        this.goodslist = datalist;
        this.tableData = this.goodslist.slice(0,20);
        this.Len = Math.ceil(this.goodslist.length/20 *10);
        this.loading = false;  
      });
  },
  methods: {
      handleDelete(index) {
        this.tableData.splice(index,1)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        let page = 20*(val-1);
        console.log(page,page+20)
        this.tableData = this.goodslist.slice(page,page+20)
      }
  }
};
</script>
<style>
.my-goodslist{
  padding-top: 30px;
}
</style>
