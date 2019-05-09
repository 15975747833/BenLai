<template>
  <div id="search">
    <el-header class="header">
      <el-row :gutter="3">
        <el-col :span="4" class="dizhi">
          <span class="rignt">北京</span>
        </el-col>
        <el-col :span="16">
          <el-input placeholder="洪湖渔家小龙虾49.9元" prefix-icon="el-icon-search" class="mysearch"></el-input>
        </el-col>
        <el-col :span="4" class="login-bar">
          <el-button type="text" class="login">搜索</el-button>
        </el-col>
      </el-row>
    </el-header>
    <div class="search_new_box">
      <dl class="hotsearch">
        <dt>
          <p>热门搜索</p>
        </dt>
        <dd class="dd">
          <a href="#" rel="nofollow" class="on">佳沛金果</a>
          <a href="#" rel="nofollow" class="on">小龙虾</a>
          <a href="#" rel="nofollow" class="on">一件包邮</a>
          <a href="#" rel="nofollow" class="on">宏福番茄</a>
          <a href="#" rel="nofollow">妃子笑荔枝</a>
          <a href="#" rel="nofollow">三文鱼</a>
          <a href="#" rel="nofollow">红颜草莓</a>
          <a href="#" rel="nofollow">椰青</a>
          <a href="#" rel="nofollow">白虾</a>
          <a href="#" rel="nofollow">李玉双有机稻花香</a>
        </dd>
      </dl>
      <dl class="searchRecord">
        <dt>
          <el-row type="flex" class="row-bg" align="middle">
            <el-col :span="22">
              <div class="grid-content bg-purple">
                <p>搜索记录</p>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-light">
                <i class="el-icon-delete"></i>
              </div>
            </el-col>
          </el-row>
        </dt>
        <dd class="dd dd2">
          <a href="#" rel="nofollow" id="key_李玉双有机稻花香">李玉双有机稻花香</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
#search {
  .header {
    width: 100%;
    padding: 0.08rem 0.08rem 0rem 0.08rem;
    height: 0.36rem;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #ccc;

    .dizhi {
      display: block;
      font: 400 0.17rem/0.44rem "黑体";
      padding: 0rem 0.28rem 0rem 0.15rem;
      background: url(//image.benlailife.com/static/images/top/top_new_98624a41.png)
        right -0.105rem no-repeat;
      background-size: 0.23rem 5.37rem;
      color: #333;
    }
    el-input.mysearch {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 0.25rem;
    }
    .login {
      display: block;
      min-width: 0.6rem;
      font: 400 0.15rem/0.44rem "黑体";
      color: #9dd300;
      text-align: center;
      padding: 0rem 0.1rem;
      box-sizing: border-box;
    }
  }
  .search_new_box {
    .hotsearch {
      background-color: #fff;
      margin-bottom: 0.1rem;
      padding: 0rem 0.1rem;
      dt {
        width: 100%;
        height: 0.44rem;
        p {
          color: #999;
          font-size: 0.14rem;
          line-height: 0.44rem;
        }
      }
      dd {
        padding-bottom: 0.1rem;
        width: 100%;
        overflow: hidden;
        a {
          float: left;
          margin: 0rem 0.1rem 0.1rem 0rem;
          font-size: 0.12rem;
          line-height: 0.23rem;
          height: 0.24rem;
          color: #333;
          padding: 0rem 0.1rem;
          border-radius: 0.02rem;
          text-align: center;
          border: 1px solid #ddd;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          overflow: hidden;
          &.on {
            color: #ff6900;
            border: 1px solid #ff6900;
          }
        }
      }
    }
    .searchRecord {
      background-color: #fff;
      margin-bottom: 0.1rem;
      padding: 0rem 0.1rem;
      dt {
        width: 100%;
        height: 0.44rem;
        p {
          color: #999;
          font-size: 0.14rem;
          line-height: 0.44rem;
        }
        i {
          font-size: 0.15rem;
        }
      }
      dd {
        padding-bottom: 0.1rem;
        overflow: hidden;
        a {
          float: left;
          margin: 0rem 0.1rem 0.1rem 0rem;
          font-size: 0.12rem;
          line-height: 0.23rem;
          height: 0.24rem;
          color: #333;
          padding: 0rem 0.1rem;
          box-sizing: border-box;
          border-radius: 0.02rem;
          text-align: center;
          border: 1px solid #ddd;
          max-width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
