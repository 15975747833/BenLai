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
          <!-- <el-button size="mini" type="text" @click="remark(scope.$index,scope.row)"> -->
          <el-button size="mini" type="text" @click="open(scope.$index,scope.row)">备注</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除用户</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-show="tijiaostatus" style="width:100%;height:100%;background:rgba(220,220,220,0.8);position:fixed;left:0;top:0;z-index:100;">

    
    <div class="beizhu">
      
      <el-form
        label-width="100px"
      >
      <el-form-item>
        <h3>
          备注：
        <span style="float:right;cursor: pointer;" @click="close">&times;</span>
        </h3>
      </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="realname" placeholder="真实名称"></el-input>
        </el-form-item>
        <el-form-item prop="address">
          <el-input v-model="address" placeholder="地址"></el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="hobby">
          <el-input v-model="hobby" placeholder="爱好"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="remark" :loading="loading2">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>
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
      
        realname:"",
        address:"",
        email:"",
        hobby:""
      
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

    remark() {
      let params = {
        realname: this.realname,
        address: this.address,
        email: this.email,
        hobby: this.hobby
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
        //刷新当前页面
        this.$router.go(0);
      }, 2000);
    },
    open(index,row) {
      this.tijiaostatus = true;
     this.currentName = row.name
    },

    close() {
      this.tijiaostatus = false;
      this.realname="";
        this.address="";
        this.email="";
        this.hobby=""
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
