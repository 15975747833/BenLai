<template>
  <div id="address">
    <div class="header">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <i class="el-icon-close header-back"></i>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light header-city">
            当前城市-
            <span>佛山</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <main class="main">
      <el-row type="flex" class="row-bg address-input" >
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
          </div>
        </el-col>
      </el-row>
      <div class="city_locate" style="opacity: 1;">
        <dl>
            <dt>定位城市</dt>
            <dd id="cityLocate">
                <p id="">定位失败，点击重试</p>
            </dd>
        </dl>
    </div>
    </main>

    <!-- <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
#address {
  .header {
    background: #fff;
    .header-back {
      font: 400 0.17rem/0.44rem "\9ED1\4F53";
      padding-left: 0.1rem;
    }
    .header-city {
      text-align: center;
      font-size: 0.17rem;
      line-height: 0.44rem;
    }
  }
  .main{
      .address-input{
          padding:0.1rem;
             

      }
      dl{
          dt{
                  font: 400 .14rem/0.26rem "黑体";
    color: #bbb;
    line-height: .32rem;
          }
      }
      .city_locate{

      }
  }
}
</style>
