<template>
  <el-container>
    <el-header style="height:0.44rem;position:fixed;width:100%;z-index:100;background:#fff;">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple header-l"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple header-c">我的本来</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple header-r">
            <i class="el-icon-s-unfold" style="color:#9dd300;font-size:0.17rem;line-height: 0.44rem;" @click="quit" v-show="quitstatus">退出</i>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <div class="benlai-green" style="margin-top:0.4rem;">
        <div class="benlai-top">
          <div class="benlai-top-title" style="position:relative;">


            <!-- 上传头像 -->
            <div style="background:#fff;border-radius:50%;width:0.6rem;height:0.6rem;position:absolute;overflow:hidden;">
            <el-upload
              class="avatar-uploader"
              :action="uploadpath"
              :data="user" 
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width:100%;height:100%;">
              <i v-else style="display:block;width:0.6rem;height:0.6rem;"></i>
            </el-upload>
</div>

            <div class="info" style="position:absolute;z-index:100;left:0.8rem;">
              <p style="color:#fff;">{{username}}</p>
              <i style="padding:0.2rem;color:#fff;font-size:0.17rem;line-height: 0.44rem;" @click="goto" v-show="loginstatus">登录/注册</i>
            </div>
          </div>
        </div>
      </div>
      <ul class="grade">
        <li>
          <a href="#">
            <font>当前拥有</font>
            <p>0</p>
            <font>成长值</font>
          </a>
        </li>
        <li>
          <a href="#">
            <font>升级至绿卡所需</font>
            <p>1</p>
            <font>成长值</font>
          </a>
        </li>
      </ul>
      <!-- 我的钱包 -->
      <div class="mycenter">
        <ol>我的钱包</ol>
        <ul>
          <li>
            <a>
              <p>
                <span>0</span>元
              </p>
              <font>余额</font>
            </a>
          </li>
          <li>
            <a>
              <p>
                <span>3</span>张
              </p>
              <font>优惠券</font>
            </a>
          </li>
          <li>
            <a>
              <p>
                <span>0</span>分
              </p>
              <font>余额</font>
            </a>
          </li>
          <li>
            <a>
              <p>
                <span>0</span>张
              </p>
              <font>礼盒卡</font>
            </a>
          </li>
        </ul>
      </div>
      <div class="mycenter_new_list">
        <dl>
          <dt>
            <p>我的订单</p>
            <a name="Buying_1" @click="myorder">查看全部订单</a>
          </dt>
          <dd>
            <a name="Buying_2" style="color:#65b32b;">
              <em class="el-icon-bank-card"></em>
              <p>待支付</p>
            </a>
            <a name="Buying_3" style="color:#65b32b;">
              <em class="el-icon-truck"></em>

              <p>配送中</p>
            </a>
            <a name="Buying_4" style="color:#65b32b;">
              <em class="el-icon-chat-line-round"></em>

              <p>待评价</p>
            </a>
            <a style="color:#65b32b;">
              <em class="el-icon-sold-out"></em>
              <p>退换货</p>
            </a>
          </dd>
        </dl>
        <!-- 本来充值有礼 -->
        <dl id="payTabPmenu" style="opacity: 1;">
          <dt>
            <p>本来充值有好礼</p>
          </dt>
          <div class="box">
            <ul style="width: 7.2rem;" id="payTab">
              <li id="idx" v-for="(item,idx) in payTab" :key="idx">
                <a>
                  <em>
                    <span>{{item.price}}</span>元
                  </em>
                  <p>{{item.msg}}</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="pay_btn">
            <a href="javascript:void(0);">立即充值</a>
          </div>
        </dl>
        <dl>
           <dd class="ico">
            <el-row>
              <el-col :span="6" v-for="(item,idx) in ico" :key="idx">
                <div class="grid-content">
                  <a style="padding:0.1rem;">
                    <i :class="item.icon" style="color:#65b32b;"></i>
                    <p>{{item.keyname}}</p>
                  </a>
                </div>
              </el-col>
            </el-row>
          </dd>
        </dl>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return { 
      username: null,
      user:{},
      loginstatus:true,
      quitstatus:false,
      headerstatus:false,
      imageUrl: '',
      uploadpath:'http://193.112.60.97:19011/upload',
      ico: [
        { keyname: "我的会员", icon: "el-icon-star-on" },
        { keyname: "赠品兑换 ", icon: "el-icon-star-on" },
        { keyname: "我的收藏", icon: "el-icon-star-on" },
        { keyname: "帐户管理 ", icon: "el-icon-star-on" },
        { keyname: "我的宅配", icon: "el-icon-star-on" },
        { keyname: "客服中心 ", icon: "el-icon-star-on" },
        { keyname: "本来联名卡 ", icon: "el-icon-star-on" },
        { keyname: "特权码 ", icon: "el-icon-star-on" },
        { keyname: "我的评价 ", icon: "el-icon-star-on" },
        { keyname: "关于本来 ", icon: "el-icon-star-on" }
      ],
      payTab: [
        { price: 5000, msg: "充值5000送630元礼包" },
        { price: 2000, msg: "充值2000送236.9元礼包" },
        { price: 1000, msg: "充值1000送新西兰皇后苹果礼盒装" },
        { price: 500, msg: "充值1000送新西兰皇后苹果礼盒装" }
      ]
      };
  },
  created() {
    let saveUsername = localStorage.getItem("username");
    if (saveUsername) {
      this.username = saveUsername;
      this.user = {user:saveUsername}
      this.loginstatus=false;
      this.quitstatus=true
      this.$axios.get('http://193.112.60.97:19011/users',{
        params: {
              username: this.username
            }
      }).then(({data})=>{
        console.log(data[0].imgurl);
        this.imageUrl = "http://193.112.60.97:19011/public/"+ data[0].imgurl

      })
    } else {
      this.username = null;
      this.loginstatus=true;
      this.quitstatus=false
    }
  },
  methods:{
    goto(){
      // 点击登录，跳转到登录页
      this.$router.push({ name: "Login"});     
    },
    quit(){
      // 点击退出，清除本地存储
      localStorage.removeItem('username');
      localStorage.removeItem('loginStatus');
       localStorage.removeItem('cartData');
      this.$store.commit("removeFromCart", {goodslist:"goodslist"});
      this.$router.push({ name: "Home"});     
    },
    myorder(){
      this.$router.push({name: "Myorder",params: { username:this.username}})
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  background: #fff;
  .header-l,
  .header-c,
  .header-r {
    height: 0.44rem;
    text-align: center;
    color: #000;
    font-size: 0.17rem;
    line-height: 0.44rem;
  }
  .header-l {
    text-align: left;
    padding-left: 0.1rem;
  }
  .header-r {
    text-align: right;
    i {
      padding-right: 0.1rem;
      
    }
  }
}
.el-main {
  padding: 0rem;
  margin-bottom:0.49rem;
  //   position: relative;
  height: 100%;
  .benlai-top {
    height: 1.2rem;
    background:url('../img/userbg.jpg') no-repeat;
    background-size:cover;
    .benlai-top-title {
      padding-left: 0.2rem;
      padding-top: 0.2rem;
      width: 3.3rem;
      height: 0.8rem;
      overflow: hidden;
      .circle {
        width: 0.52rem;
        height: 0.52rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        float: left;
      }
      .info {
        font-size: 0.25rem;
        line-height: 0.5rem;
        p {
          padding-left: 0.2rem;
        }
      }
    }
  }
  .grade {
    display: flex;
    width: 100%;
    // padding: 0 0.1rem;
    // position: absolute;
    // top: 0.9rem;
    li {
      z-index: 90;
      background: #fff;
      flex: 1;
      background-color: #fff;
      border-radius: 0.04rem;
      height: 0.8rem;
      padding: 0.1rem 0 0.1rem 0.1rem;
      box-shadow: 0 0.04rem 0.08rem 0 rgba(138, 198, 0, 0.1);
      margin-right: 0.05rem;
      font {
        color: #999;
      }
      p {
        font-size: 0.18rem;
        line-height: 0.3rem;
        font-weight: 700;
        color: #000;
      }
    }
  }
  .mycenter {
    ol {
      font-size: 0.16rem;
      line-height: 0.56rem;
      font-weight: 700;
      padding: 0 0.1rem;
    }
    ul {
      display: flex;
      li {
        flex: 1 1 auto;
        text-align: center;
        a {
          color: #666;
          p {
            font-size: 0.12rem;
            line-height: 0.25rem;
            span {
              font-size: 0.18rem;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
  .mycenter_new_list {
    dl {
      padding: 0 0.1rem;
      dt {
        overflow: hidden;
        p {
          float: left;
          font-size: 0.16rem;
          color: #000;
          line-height: 0.56rem;
          font-weight: 700;
        }
        a {
          float: right;
          font-size: 0.13rem;
          color: #999;
          line-height: 0.56rem;
          padding-right: 0.2rem;

          background-size: 0.15rem;
        }
      }
      dd {
        display: flex;
        a {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: center;
          em {
            font-size: 0.25rem;
          }
          p {
            font-size: 0.12rem;
            color: #000;
            line-height: 0.2rem;
          }
        }
      }
    }
    #payTabPmenu {
      dl {
        padding: 0 0.1rem;
        dt {
          p {
            float: left;
            font-size: 0.16rem;
            color: #000;
            line-height: 0.56rem;
            font-weight: 700;
          }
        }
      }
      .box {
        overflow-y: hidden;
        height: 1.08rem;
        width: 100%;
        ul {
          display: flex;
          padding-left: 0.1rem;
          li {
            float: left;
            margin-right: 0.1rem;
            background: #eff5a5;
            border-radius: 0.04rem;
            a {
              height: 0.9rem;
              height: 1.6rem;
              em {
                color: #000;
                font-size: 0.14rem;
                display: block;
                span {
                  font-size: 0.26rem;
                  line-height: 0.5rem;
                }
              }
              p {
                height: 0.4rem;
                width: 1.4rem;
                line-height: 0.15rem;
                display: table-cell;
                vertical-align: middle;
                border-top: 1px dashed #fff;
                font-size: 0.12rem;
              }
            }
          }
        }
      }
      .pay_btn {
        a {
          display: block;
          width: 100%;
          text-align: center;
          font-size: 0.15rem;
          border: 1px solid #ddd;
          color: #000;
          line-height: 0.4rem;
          border-radius: 0.04rem;
        }
      }
    }
    .ico {
      margin-bottom: 0.1rem;
      a {
        padding: 0.12rem 0;
        i {
          font-size: 0.48rem;
        }
        p {
          font-size: 0.12rem;
          color: #000;
          line-height: 0.2rem;
        }
      }
    }
  }
}
.avatar-uploader .el-upload{
  width: 0.6rem;
  background:#f00;
}
</style>