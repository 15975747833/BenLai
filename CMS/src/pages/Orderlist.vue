<template>
  <div class="userslist">
    <el-table :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column label="全选" type="selection"></el-table-column>
      <el-table-column type='index' label="#" width="50px"></el-table-column>
      <el-table-column prop="buyer" label="客户昵称" sortable></el-table-column>
       <el-table-column prop="orderNum" label="订单编号" sortable></el-table-column>
       <el-table-column prop="productName" label="商品名称" sortable></el-table-column>
      <el-table-column prop="price" label="商品价格" sortable></el-table-column>
        <el-table-column prop="qty" label="购买数量" sortable></el-table-column>
      <el-table-column prop="date" label="下单时间" sortable></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除订单</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
       loading:true
    };
  },
   created() {
    // 发起ajax请求，返回promise对象
    this.$axios
      .get("/api/order", {

      })
      .then(({data}) => {
        console.log(data);
        for(let i=0;i<data.length;i++){
          let aa = {};
         let bb = data[i].time;
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
          
          aa.buyer = data[i].buyer;
          aa.orderNum = data[i].orderNum;
          aa.date = cc;
          aa.gdArr = data[i].gdArr;
            this.tableData.push(aa);
            console.log("aa=",this.tableData)       
        }
        let ii=[]
        this.tableData.forEach(item => {
            
            for(var j=0;j<item.gdArr.length;j++){
                let er = {}
                er.goodsNum = item.gdArr[j].goodsNum;
                er.price = item.gdArr[j].proPrice;
                er.qty = item.gdArr[j].qty;
                er.productName = item.gdArr[j].productName;
                er.buyer=item.buyer;
                er.date = item.date;
                er.orderNum = item.orderNum;
                er.idx = j+1;
                ii.push(er);
                console.log(ii)
            }
        })
        this.tableData = ii;
        // this.tableData.orderNum = data.orderNum;
        this.loading = false;  
        console.log(this.tableData)
        
      });
  },
  methods: {
      handleDelete(index, row) {
      this.tableData.splice(index, 1);
      console.log(index, row);
      let buyer = row.buyer;
      let orderNum = row.orderNum;
      console.log("删除订单=",orderNum)
      //点击删除用户
      this.$axios
        .delete("/api/order", {
          params: {
            buyer,
            orderNum,
          }
        })
        .then(data => {
          console.log(data);
        });
    },
  }
};
</script>
<style>
.userslist{
  padding-top: 30px;
}
</style>
