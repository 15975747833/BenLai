<template>
  <div class="home">
    <div id="header">
      <el-header class="header">
        <el-row :gutter="3">
          <el-col :span="4" class="dizhi">
            <span class="rignt" @click="goto('/address')">{{getCurrentcity}}</span>
          </el-col>
          <el-col :span="16" >
            <el-input placeholder="洪湖渔家小龙虾49.9元" prefix-icon="el-icon-search" class="mysearch"   @focus="goto('/search')"  ></el-input>
          </el-col>
          <el-col :span="4" class="login-bar">
            <el-button type="text" @click="goto('/login')" class="login">登录</el-button>
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
          <el-tabs v-model="activeName" style="width:200%">
            <el-tab-pane label="推荐" name="first">推荐</el-tab-pane>
            <el-tab-pane label="水果" name="second">水果</el-tab-pane>
            <el-tab-pane label="水产" name="third">水产</el-tab-pane>
            <el-tab-pane label="肉禽" name="fourth">肉禽</el-tab-pane>
            <el-tab-pane label="蔬菜" name="five">蔬菜</el-tab-pane>
            <el-tab-pane label="粮油" name="six">粮油</el-tab-pane>
            <el-tab-pane label="熟食" name="seven">熟食</el-tab-pane>
            <el-tab-pane label="乳品" name="eight">乳品</el-tab-pane>
            <el-tab-pane label="零食" name="nine">零食</el-tab-pane>
            <el-tab-pane label="酒饮" name="ten">酒饮</el-tab-pane>
            <el-tab-pane label="厨具" name="eleven">厨具</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div id="main">
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
        <img
          alt="本来生活|包邮直采，泰国金枕榴莲229元/8-10斤！"
          src="//image.benlailife.com/AppHomePageImage/98615be526c4438681e3567a8fdbcc4e_n-n.gif?imageView2/2/w/1035/format/webp"
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
      activeName: "first",
      imgs: [
        {
          id: 1,
          img:
            "https://image.benlailife.com/AppHomePageImage/72cd40d56232476a816e9edfe4ab2120_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 2,
          img:
            "https://image1.benlailife.com/AppHomePageImage/d82ef3926bf74e0bbb84833263c5aed0_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 3,
          img:
            "https://image1.benlailife.com/AppHomePageImage/c5e998fadab244dba7452fdece966dd6_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 4,
          img:
            "https://image.benlailife.com/AppHomePageImage/5eacf8dcf5e445d3a510c2df6fe31e9a_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 5,
          img:
            "https://image4.benlailife.com/AppHomePageImage/ff3697e109fd4502a6c88a369b7e2159_n-n.jpg?imageView2/2/w/1035/format/webp"
        }
      ],
      tab2: [
        {
          id: 1,
          img:
            "//image5.benlailife.com/Customer/GradeIcon/8d35e656-583f-4ff0-a0f7-28f3b2452bf3_n-n.png?imageView2/2/w/1035/format/webp"
        },
        {
          id: 2,
          img:
            "//image1.benlailife.com/Customer/GradeIcon/8b68139f-8350-4f49-bd46-77089c64a1f1_n-n.png?imageView2/2/w/1035/format/webp"
        },
        {
          id: 3,
          img:
            "//image2.benlailife.com/Customer/GradeIcon/b72bf52d-94d8-4143-ac7c-4116ddea3189_n-n.png?imageView2/2/w/1035/format/webp"
        },
        {
          id: 4,
          img:
            "//image7.benlailife.com/Customer/GradeIcon/c8a5d307-c009-46c1-a52d-f8a9a957782a_n-n.png?imageView2/2/w/1035/format/webp"
        }
      ],
      tabhui: [
        {
          id: 1,
          img:
            "//image3.benlailife.com/Customer/GradeIcon/cc4ed212-bf0f-496f-b72e-2d09cfd44514_n-n.jpg?imageView2/2/w/1035/format/webp"
        },

        {
          id: 2,
          img:
            "//image7.benlailife.com/Customer/GradeIcon/a52ab09f-f52c-43d3-87ce-cba914c8b4d9_n-n.jpg?imageView2/2/w/1035/format/webp"
        },

        {
          id: 3,
          img:
            "//image1.benlailife.com/Customer/GradeIcon/fabbf791-372b-4fd2-a99c-fc4a315d484b_n-n.jpg?imageView2/2/w/1035/format/webp"
        },

        {
          id: 4,
          img:
            "//image3.benlailife.com/Customer/GradeIcon/dbdc93b9-eaf9-4da5-8c93-bbbb96e9bf99_n-n.jpg?imageView2/2/w/1035/format/webp"
        },

        {
          id: 5,
          img:
            "//image3.benlailife.com/Customer/GradeIcon/ce4ac7ec-cec9-41ea-aa89-62d17b2de8f5_n-n.jpg?imageView2/2/w/1035/format/webp"
        },

        {
          id: 6,
          img:
            "//image4.benlailife.com/Customer/GradeIcon/5a050612-56d2-417e-9873-647a27896bfc_n-n.jpg?imageView2/2/w/1035/fo},rmat/webp"
        },

        {
          id: 7,
          img:
            "//image3.benlailife.com/Customer/GradeIcon/5e37b680-2fe7-4a96-aafe-f24306bd5a0c_n-n.jpg?imageView2/2/w/1035/fo},rmat/webp"
        },

        {
          id: 8,
          img:
            "//image6.benlailife.com/Customer/GradeIcon/ce0ee138-f34a-4c1d-9da3-ec0ecba74539_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 9,
          img:
            "//image3.benlailife.com/Customer/GradeIcon/ec14d993-815e-4de0-a649-ee14c5801362_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 10,
          img:
            "//image4.benlailife.com/Customer/GradeIcon/f70a33b6-80a4-400e-9384-2484dbf0bcfc_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 11,
          img:
            "//image1.benlailife.com/Customer/GradeIcon/ae069414-87dd-4aa2-b4ab-11b193980c35_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 12,
          img:
            "//image4.benlailife.com/Customer/GradeIcon/97df1dd6-e860-49d1-bbb0-06053668e2a0_n-n.jpg?imageView2/2/w/1035/fo},rmat/webp"
        }
      ],
      tab3: [
        {
          id: 1,
          img:
            "//image3.benlailife.com/AppHomePageImage/c55c0d2348cc435b861484cb74fa6fa0_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 2,
          img:
            "//image.benlailife.com/AppHomePageImage/a518d9e1ef9b435a8eab9190f1fe06a0_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 3,
          img:
            "//image4.benlailife.com/AppHomePageImage/3a94848225c642999add1dd25dfa2a3c_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 4,
          img:
            "//image6.benlailife.com/AppHomePageImage/ef952cedceef4ff288938f3226845164_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 5,
          img:
            "//image5.benlailife.com/AppHomePageImage/cb49723be0ff448ba58a401cff9e3622_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 6,
          img:
            "//image5.benlailife.com/AppHomePageImage/2be4ac1b900341f9a749864565aed296_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 7,
          img:
            "//image4.benlailife.com/AppHomePageImage/a982503bd26d4452be76446209022bb6_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 8,
          img:
            "//image2.benlailife.com/AppHomePageImage/263e75d8c55a4791884db6a187138f05_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 9,
          img:
            "//image6.benlailife.com/AppHomePageImage/2cff1d34f22641449e37b12b86951b02_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 10,
          img:
            "//image3.benlailife.com/AppHomePageImage/61aefb753f274ebf86e9566464e9bcb8_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 11,
          img:
            "//image4.benlailife.com/AppHomePageImage/823e0b475086497fab2c1d8ae144dccf_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 12,
          img:
            "//image5.benlailife.com/AppHomePageImage/6b477752d0ad4c31aad7e92cfc9a7c2f_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 13,
          img:
            "//image7.benlailife.com/AppHomePageImage/b0ced95803ac4cd29fdcfd2356221617_n-n.gif?imageView2/2/w/1035/format/webp"
        },
        {
          id: 14,
          img:
            "//image.benlailife.com/AppHomePageImage/c6585aa481564d62b5914d242ef6f929_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 15,
          img:
            "//image5.benlailife.com/AppHomePageImage/405afe43c5384256b8f8de4a996daf05_n-n.jpg?imageView2/2/w/1035/format/webp"
        },
        {
          id: 16,
          img:
            "//image7.benlailife.com/AppHomePageImage/9f0903823113422b81f49a685b65c2b5_n-n.jpg?imageView2/2/w/1035/format/webp"
        }
      ]
    };
  },
  methods:{
    goto(path){
      console.log('a',path)
      this.$router.push(path);
    }
  },
  computed:{
    getCurrentcity(){
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
    background: yellow;
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
    background: yellow;
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


