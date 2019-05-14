<template>
    <div class="myinfo">
    
      <el-row :gutter="20">
        <el-col :span="5">
            <el-card shadow="always" style="height: 500px;">
            <img :src="imgurl" style="width:100px;">
            <p>姓名：{{username}}</p>
            <p>邮箱：{{email}}</p>
        </el-card>
        </el-col>
        <el-col :span="19">
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
            <p>1111111111111111111111111111</p>
        </el-col>
    </el-row>
    
    </div>
</template>
<script>
export default {
    data(){
        return {
            imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557398071141&di=a026027e1ae477b0ec7ff0ca256e649d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0158375cb076d5a801208f8b76effa.jpg%401280w_1l_2o_100sh.jpg',
            username:'lemon',
            email:'lemon@1000phone.com'
            
        }
    },
     created() {
    // 给goods数据库添加数据的函数，不可乱用----------------
    // let aa = []
    // this.$axios
    //   .post("/api/putdata", {
    //     'aa':aa
    //    } )
    //   .then(({data}) => {
    //     console.log(data);
    //   });
  },
}
</script>
<style>
.myinfo{
    padding:40px 20px;
    
}
</style>

