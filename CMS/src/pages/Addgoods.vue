<template>
  <div>
    <div style="width:1000px;padding:20px 0;">
        <!-- 第一行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品名称</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入标题" style="width:80%;"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">
            <span>50字以内</span>
          </div>
        </el-col>
      </el-row>

      <!-- 第二行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品副标题</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入" style="width:80%;"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">
            <span>100字以内</span>
          </div>
        </el-col>
      </el-row>

         <!-- 第三行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品价格</div>
        </el-col>
        <el-col :span="17">
          <div>
            <el-input placeholder="请输入标题" style="width:200px;"></el-input>
            <span style="padding:40px;">销售价格</span>
            <el-input placeholder="请输入标题" style="width:200px;"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">
          </div>
        </el-col>
      </el-row>

       <!-- 第四行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品分类</div>
        </el-col>
        <el-col :span="17" style="background:yellow;position:relative">
          <select name style="height:36px;border-radius:7px;width:100%;">
            <option value>镇店之宝</option>
            <option value>水果</option>
          </select>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>

         <!-- 第五行 -->
      <el-row style="padding:10px 0;height:200px;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品图片</div>
        </el-col>
        <el-col :span="17">
            <el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0" style="width:20%">
                <el-card :body-style="{ padding: '0px' }">
                <img src="../img/logo.jpg" style="display:block;height:80px;margin:0 auto">
                <div style="padding: 14px;">
                    <input type="radio">
                        设置为封面
                </div>
                </el-card>
            </el-col>
        </el-col>
        <el-col :span="4">
            <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;width:80x;height:80px;">
                <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
               >
                <i  class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </el-col>
      </el-row>



     <!-- 第六行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">库存</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
            <el-input style="width:20%;"></el-input>
          </div>
        </el-col>
        <el-col :span="4">
        </el-col>   
      </el-row>

     <!-- 第七行 未写 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品属性</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
             <el-switch v-model="value1" active-text="热卖" inactive-text="" style="padding-right:30px;">
              </el-switch>
               <el-switch v-model="value2" active-text="推荐" inactive-text="" style="padding-right:30px;">
              </el-switch>
               <el-switch v-model="value3" active-text="促销" inactive-text="" style="padding-right:30px;">
              </el-switch>
          </div>
        </el-col>
        <el-col :span="4"> 
        </el-col>
      </el-row>


    <!-- 第八行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">上架</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
             <el-switch v-model="value4" active-text="ON" inactive-text="OFF">
              </el-switch>
          </div>
        </el-col>
        <el-col :span="4"> 
        </el-col>
      </el-row>

        <!-- 第九行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
          <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;">商品描述</div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple">
             <textarea name="" id="" cols="90" rows="10" style="border-radius:2px;"></textarea>
          </div>
        </el-col>
        <el-col :span="4"> 
        </el-col>
      </el-row>

         <!-- 第10行 -->
      <el-row style="padding:10px 0;">
        <el-col :span="3">
            <div class="grid-content bg-purple" style="padding:6px 4px 0 6px;"></div>
        </el-col>
        <el-col :span="17">
          <div class="grid-content bg-purple" >
            <el-button type="primary">确认</el-button>
          </div>
        </el-col>
        <el-col :span="4"> 
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true
      }
    }
  };
</script>
<style>
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
