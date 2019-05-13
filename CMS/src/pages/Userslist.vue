<template>
  <div class="userslist">



    <el-table :data="tableData" v-loading="loading" style="width: 100%">
      <el-table-column label="全选" type="selection"></el-table-column>
      <el-table-column type="index" label="#" width="50px"></el-table-column>
      <el-table-column prop="name" label="用户名" sortable></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="date" label="注册时间" sortable></el-table-column>
      <el-table-column label="操作" width="180px">
        <template slot-scope="scope">
       
          <!-- <el-button size="mini" type="text" @click="open(scope.$index,scope.row)">备注</el-button> -->
    <el-button type="text" @click="remark(scope.$index,scope.row)">备注</el-button>
      <el-dialog title="备注客户信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="客户姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="客户地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="客户邮箱" :label-width="formLabelWidth">
            <el-input v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="客户爱好" :label-width="formLabelWidth">
            <el-input v-model="form.hobby" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="aa" :loading="loading2">确 定</el-button>
        </div>
      </el-dialog>




          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除用户</el-button>
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
      loading: true,
      tijiaostatus: false,
      loading2:false,
      currentName:"",
      dialogFormVisible: false,
        form: {
          name: '',
          address:"",
          email:"",
          hobby:"",
        },
        formLabelWidth: '180px'
      
    };
  },
  created() {
    // 发起ajax请求，返回promise对象
    this.$axios.get("/api/users", {}).then(({ data }) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let aa = {};
        let bb = data[i].regtime;
        var d = new Date(bb);
        var arr = "天,一,二,三,四,五,六".split(",");
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        var day = d.getDay(); //
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        let cc = `${year}/${month}/${date},星期${
          arr[day]
        }，${hour}:${minute}:${second}`;
        aa.idx = i + 1;
        aa.name = data[i].username;
        aa.address = data[i].address;
        aa.date = cc;
        this.tableData.push(aa);
        this.loading = false;
      }
    });
  },
  methods: {
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      console.log(index, row.name);
      let username = row.name;
      //点击删除用户
      this.$axios
        .delete("/api/users", {
          params: {
            username
          }
        })
        .then(data => {
          console.log(data);
        });
    },
  remark(index, row){
      console.log(index, row.name);
      this.currentName = row.name;
      this.dialogFormVisible = true
  },


    aa(){
      console.log(this.form);
      let params = {
        realname: this.form.name,
        address: this.form.address,
        email: this.form.email,
        hobby: this.form.hobby
       }
      console.log("this.ruleForm=",params);
      this.loading2= true;
      //发起请求，添加数据信息
      setTimeout(() => {       
        this.$axios
        .put("/api/users", {
          username: this.currentName,
          params
        })
        .then(data => {
          console.log(data);
        });
        this.tijiaostatus = false;
        this.realname="";
        this.address="";
        this.email="";
        this.hobby="";
        this.loading2 = false;
        this.dialogFormVisible=false;
        //刷新当前页面
        this.$router.go(0);
      }, 2000);

    }
  }
};
</script>
<style>
.userslist {
  padding-top: 30px;
  
}
.beizhu {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
