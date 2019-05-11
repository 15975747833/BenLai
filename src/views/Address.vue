<template>
  <div id="address">
    <div class="header">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <i class="el-icon-close header-back" @click="goto('/home')"></i>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light header-city">
            当前城市-
            <span>{{getCurrentcity}}</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
    <main class="main">
      <el-row type="flex" class="row-bg address-input">
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keyword"></el-input>
          </div>
        </el-col>
      </el-row>

      
    


      <div class="city_locate" style="opacity: 1;">
        <dl>
          <dt>定位城市</dt>
          <dd>
            <!-- <a href="javascript:;" rel="nofollow">定位失败，点击重试</a> -->
            <p>{{getCurrentcity}}</p>
          </dd>
        </dl>
      </div>
      <div class="city_hot">
        <dl>
          <dt>最近访问城市</dt>
          <dd>
            <a
              href="javascript:;"
              rel="nofollow"
              v-for="item in getBrowseRecord_city"
              :key="item.index"
              @click="saveCurrentCity(item)"
            >{{item}}</a>
          </dd>
        </dl>
      </div>
      <div class="city_hot">
        <dl>
          <dt>热门城市</dt>
          <dd>
            <a
              id="hotCity_2"
              href="javascript:;"
              rel="nofollow"
              v-for="item in city_hot"
              :key="item.index"
              @click="saveCurrentCity(item)"
            >{{item}}</a>
            <!-- 点击按钮存储当前城市，触发mutations，保存到vuex中 再将vuex中的拿出来渲染头部-->
          </dd>
        </dl>
      </div>
      <div class="city_letter">
        <dl>
          <dt>
            所有城市
            <p>各省份所售商品不同，请选择您的送达省份</p>
          </dt>
          <dd>
            <p v-for="item in city_list" :key="item.indexs">
              <a href="#">{{item.indexs}}</a>
            </p>
            
          </dd>
        </dl>
      </div>
    </main>

    <mt-index-list>
      <mt-index-section :index="item.indexs" v-for="item in city_list" :key="item.indexs">
        <mt-cell :title="citys" v-for="citys in item.citys" :key="citys.index"></mt-cell>
      </mt-index-section>
      
    </mt-index-list>
  </div>
</template>




<script>
export default {
  data() {
    return {
      city_hot: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "南京",
        "杭州",
        "天津",
        "苏州",
        "无锡",
        "佛山",
        "东莞",
        "宁波"
      ],
      keyword: "",
      city_list: [
        {
          indexs: "A",
          citys: [
            "鞍山",
            "安庆",
            "安阳",
            "阿坝",
            "安康",
            "阿拉善盟",
            "安顺",
            "阿里地区",
            "阿克苏地区",
            "阿勒泰地区",
            "阿拉尔"
          ]
        },
        {
          indexs: "B",
          citys: [
            "北京",
            "保定",
            "蚌埠",
            "亳州",
            "滨州",
            "本溪",
            "北海",
            "百色",
            "巴中",
            "宝鸡",
            "包头",
            "巴彦淖尔",
            "白山",
            "白城",
            "白沙黎族自治县",
            "保亭黎族苗族自治县",
            "毕节",
            "保山",
            "白银",
            "博尔塔拉蒙古自治州",
            "巴音郭楞蒙古自治州"
          ]
        },
        {
          indexs: "C",
          citys: [
            "常州",
            "承德",
            "沧州",
            "长治",
            "滁州",
            "池州",
            "潮州",
            "长沙",
            "常德",
            "郴州",
            "朝阳",
            "崇左",
            "重庆",
            "成都",
            "赤峰",
            "长春",
            "澄迈县",
            "昌江黎族自治县",
            "楚雄彝族自治州",
            "昌都地区",
            "昌吉回族自治州"
          ]
        },
        {
          indexs: "D",
          citys: [
            "东莞",
            "大连",
            "大同",
            "东营",
            "德州",
            "丹东",
            "德阳",
            "达州",
            "定州",
            "大庆",
            "大兴安岭地区",
            "东方",
            "定安县",
            "大理白族自治州",
            "德宏傣族景颇族自治州",
            "迪庆藏族自治州",
            "定西",
            "塔城地区"
          ]
        },
        {
          indexs: "E",
          citys: ["鄂州", "恩施", "鄂尔多斯"]
        },
        {
          indexs: "F",
          citys: ["佛山", "抚顺", "阜阳", "福州", "抚州", "阜新", "防城港"]
        }
      ]
    };
  },
  // 搜索框渲染成动态组件
  // components:{
  //   show_first:{
  //     template:".show_first"
  //   },
  //   show_blur:{

  //   }
    
  // },
  computed: {
    // getCurrentcity(){
    //   return this.$store.state.currentcity;
    // },
    getCurrentcity: {
      get: function() {
        console.log(555);
        return this.$store.state.currentcity;
      }
    },
    getBrowseRecord_city() {
      return this.$store.state.browseRecord_city;
    }
  },
  methods: {
    goto(path) {
      // console.log('goto',this.$route.query)
      // this.$router.replace(this.$route.query.redirect);
      this.$router.replace(path);
    },
    saveCurrentCity(currentcity) {
      // console.log(currentcity)
      // 把当前城市存到页面
      this.$store.commit("saveCurrentCity", currentcity);
      // 把城市定位历史存到browseRecord_city
      this.$store.commit("saveBrowseRecord_city", currentcity);
    }
  }
};
</script>

<style lang="scss" >
#address {
  position: relative;
  margin: 0.44rem 0 0.49rem 0;

  .header {
    position: fixed;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
    width: 100%;

    .header-back {
      font: 400 0.17rem/0.44rem "\9ED1\4F53";
      padding-left: 0.1rem;
      padding-right: 0.1rem;
    }
    .header-city {
      text-align: center;
      font-size: 0.17rem;
      line-height: 0.44rem;
    }
  }
  .main {
    .address-input {
      padding: 0.1rem;
    }
    dl {
      overflow: hidden;
      padding: 0.15rem;

      dt {
        font: 400 0.14rem/0.26rem "黑体";
        color: #bbb;
        line-height: 0.32rem;
      }
      dd {
        float: left;
        width: 100%;
        p {
          float: left;
          width: 32%;
          font: 400 0.14rem/0.35rem "黑体";
          color: #000;
          box-sizing: border-box;
          border-radius: 0.03rem;
          border: 1px solid #e5e5e5;
          background-color: #fff;
          display: block;
          text-align: center;
          margin: 0rem 2% 0.1rem 0rem;
          line-height: 0.36rem;
          height: 0.36rem;
          padding: 0 0.1rem;
          border-radius: 0.04rem;
          color: #add13e;
        }
      }
    }
    .city_hot {
      dl {
        dt {
        }
        dd {
          a {
            float: left;
            width: 31%;
            font: 400 0.14rem/0.35rem "黑体";
            color: #000;
            box-sizing: border-box;
            border-radius: 0.03rem;
            border: 1px solid #e5e5e5;
            background-color: #fff;
            display: block;
            text-align: center;
            margin: 0rem 2% 0.1rem 0rem;
            line-height: 0.36rem;
            height: 0.36rem;
            padding: 0 0.1rem;
            border-radius: 0.04rem;
          }
        }
      }
    }
    .city_letter {
      dl {
        overflow: hidden;
        dt {
        }
        dd {
          // text-align: center;
          // padding-left:.1rem;
          overflow: hidden;
          p {
            width: 18%;
            font-family: Arial;
            float: left;
            padding: 0 0.05rem;
            box-sizing: border-box;

            a {
              display: block;
              font-size: 0.14rem;
              color: #000;
              background-color: #fff;
              line-height: 0.36rem;
              height: 0.34rem;
              padding: 0 0.1rem;
              text-align: center;
              border-radius: 0.04rem;
              margin-bottom: 0.1rem;
            }
          }
        }
      }
    }
  }
}
</style>
