<template>
  <div class="home">
    <div id="header">
      <el-header class="header">
        <el-row :gutter="3">
          <el-col :span="4" class="dizhi">
            <span class="rignt" @click="goto('/address')">{{getCurrentcity}}</span>
          </el-col>
          <el-col :span="16">
            <el-input
              placeholder="洪湖渔家小龙虾49.9元"
              prefix-icon="el-icon-search"
              class="mysearch"
              @focus="goto('/search')"
            ></el-input>
          </el-col>
          <el-col :span="4" class="login-bar">
            <el-button type="text" @click="goto('/login')" class="login">{{username}}</el-button>
          </el-col>
        </el-row>
      </el-header>
      <div id="nav">
        <div class="list" style="width:100%">
          <div style="margin:0 5px;">
            <img
              src="https://image5.benlailife.com/AppHomePageImage/5d9df140-0134-1460-114e-2796f29d59df.gif"
              style="width:70px;"
            >
          </div>
          <el-tabs v-model="activeName" style="width:200%" @tab-click="change(activeName)">
            <el-tab-pane :label="item.lebal" :name="item.type" v-for="item in guild" :key="item.type" ></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div id="main" @click="homeClick">
      <div class="banner">
        <el-carousel class="lbt" height="170px">
          <el-carousel-item v-for="item in imgs" :key="item.id">
            <div class="lbt-item">
              <img :src="item.img" style="height:170px;">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div>
        <img :src="img2"
          style="opacity: 1;"
        >
      </div>

      <ul class="tab2">
        <li v-for="item in tab2" :key="item.id">
          <img :src="item.img">
        </li>
      </ul>
      <ul class="tabhui">
        <li v-for="item in tabhui" :key="item.id">
          <img :src="item.img">
        </li>
      </ul>
      <ul class="tab3">
        <li v-for="item in tab3" :key="item.id">
          <img :src="item.img">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      activeName: "home",
      username: "登录",
      guild: [
        { lebal: "推荐", type: "home" },
        { lebal: "水果", type: "fruit" },
        { lebal: "水产", type: "fish" },
        { lebal: "肉禽", type: "meat" },
        { lebal: "蔬菜", type: "Vegetables" },
        { lebal: "粮油", type: "grain" },
        { lebal: "熟食", type: "cooked" },
        { lebal: "乳品", type: "dairy" },
        { lebal: "零食", type: "snacks" },
        { lebal: "酒饮", type: "drinking" },
        { lebal: "厨具", type: "kitchenware" }
      ],
      imgs: null,
      img2: null,
      tab2: null,
      tabhui: null,
      tab3: null
    };
  },
  created() {
    let user = localStorage.getItem("username");
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      this.username = "";
    }
    this.$axios
      .get("http://193.112.60.97:19011/homeinfo", {
        params: {
          type: "home"
        }
      })
      .then(({ data }) => {
        this.imgs = data[0].imgs;
        this.img2 = data[0].img2;
        this.tab2 = data[0].tab2;
        this.tabhui = data[0].tabhui;
        this.tab3 = data[0].tab3;
      });
  },
  methods: {
    homeClick(){
      this.$router.push('/category');
    },
    goto(path) {
      this.$router.push(path);
    },
    change(type){
      this.$axios
      .get("http://193.112.60.97:19011/homeinfo", {
        params: {
          type
        }
      })
      .then(({ data }) => {
        this.imgs = data[0].imgs;
        this.img2 = data[0].img2;
        this.tab2 = data[0].tab2;
        this.tabhui = data[0].tabhui;
        this.tab3 = data[0].tab3;
      });
      console.log(type)
    }
  },
  computed: {
    getCurrentcity() {
      return this.$store.state.currentcity;
    }
  }
};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background: #fff;
  .header {
    width: 100%;
    padding: 0.08rem 0.08rem 0rem 0.08rem;
    height: 0.36rem;
    background: #fff;
    position: relative;
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
      height: 0.3rem;
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
  #nav {
    display: block;
    width: 100%;
    background: #fff;
    height: 0.4rem;
    overflow-x: scroll;
    position: relative;

    .list {
      width: 100%;
      display: flex;
    }
  }
}

#main {
  margin-top: 0.9rem;
  display: block;
  flex: 1;
  overflow-x: hidden;
  .lbt {
    img {
      width: 100%;
      height: 280px;
    }
    .lbt-item {
      position: relative;
    }
  }
  .tab2 {
    li {
      width: 25%;
      float: left;
    }
  }
  .tabhui {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    li {
      width: 25%;
      height: 0.79rem;
    }
  }
  .tab3 {
    flex: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 100%;
    }
  }
  .tab4 {
    width: 100%;
    overflow: hidden;
    li {
      height: 1.5rem;
    }
  }
  .title {
    width: 100%;
    height: 0.62rem;
  }
  .tab5 {
    width: 100%;
    height: 2.4rem;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    li {
      width: 50%;
      height: 1.2rem;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .cartlist {
    width: 100%;
    height: 6.3rem;
    display: block;
    padding-bottom: 10px;
    ul {
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      li {
        width: 33.3%;
        height: 2.19rem;
        img {
          width: 1.27rem;
          height: 1.27rem;
        }
        p {
          padding: 0 0 0 0.1rem;
          text-align: left;
          font-size: 0.12rem;
          height: 0.22rem;
          line-height: 0.08rem;
          padding-top: 0.06rem;
        }
        .price {
          text-align: left;
          height: 0.08rem;
          line-height: 0.08rem;
          position: relative;
          span {
            font-size: 0.16rem;
            color: #ff6900;
          }
          del {
            padding: 0 0 0 0.12rem;
            font-size: 0.02rem;
          }
          i {
            display: block;
            position: absolute;
            right: 0.24rem;
            bottom: -0.28rem;
            img {
              width: 0.24rem;
              height: 0.19rem;
            }
          }
        }
      }
    }
  }
  .cartUnit {
    ul {
      width: 100;
      overflow: hidden;
      li {
        width: 100%;
        height: 1.26rem;
        position: relative;
        img {
          width: 1rem;
          height: 1rem;
          float: left;
        }
        .info {
          width: auto;
          padding: 15px;
          height: 1rem;
          float: left;
          h4 {
            font-size: 0.14rem;
            color: #000;
            font-weight: normal;
            overflow: hidden;
            height: 0.2rem;
            line-height: 0.2rem;
          }
          .content {
            font-size: 0.12rem;
            color: #999;
            overflow: hidden;
            height: 0.2rem;
            line-height: 0.2rem;
          }
          .method {
            float: left;
            line-height: 0.15rem;
            height: 0.16rem;
            color: #ff6900;
            border: 1px solid #ffdfc7;
            font-size: 0.1rem;
            margin: 0.08rem 0.05rem 0rem 0rem;
            padding: 0rem 0.03rem;
            box-sizing: border-box;
            background-color: #fff4eb;
          }
          .price {
            position: absolute;
            z-index: 10;
            left: 0;
            bottom: -0.04rem;
            font-size: 0.12rem;
            color: #ff6900;
            line-height: 0.2rem;
            span {
              font-size: 0.18rem;
              font-weight: 700;
            }
            del {
              font-size: 0.12rem;
              color: #999;
              margin-left: 0.1rem;
              text-decoration: line-through;
            }
          }
          i {
            display: block;
            position: absolute;
            right: 0.25rem;
            bottom: 0.09rem;
            img {
              width: 0.24rem;
              height: 0.19rem;
            }
          }
        }
      }
    }
  }
}
</style>


