<template>
  <div id="app">
    <el-container>
      <el-header style="height:0.44rem;">
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <a href="#" class="city">佛山</a>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <el-input placeholder="请输入内容">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="25%">
            <el-menu class="el-menu-vertical-demo">
              <el-menu-item v-for="item in menu" :key="item._id" @click="getData(item.name)">
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <!-- right -->
          <el-main class="main_r">
            //
            <h3>{{typetitle}}</h3>
            <div class="all" v-for="item in datalist" :key="item._id">
              <a href="#">{{item.type}}</a>
            </div>
            <dl>
              <dt>
                <el-row>
                  <el-col :span="20">
                    <div class="grid-content bg-purple dt-l">{{typetitle}}</div>
                  </el-col>
                  <el-col :span="4">
                    <div class="grid-content bg-purple-light dt-r">
                      <i class="el-icon-arrow-right"></i>
                    </div>
                  </el-col>
                </el-row>
              </dt>
              <dd>
                <el-row>
                  <el-col :span="8">
                    <div
                      class="grid-content bg-purple dd-item"
                      v-for="item in datalist"
                      :key="item.id"
                    >
                      <a href="#">
                        <img
                          class="lazy"
                          :src="item.img"
                          style="width: 62px; height: 62px; opacity: 1; margin:0 auto;"
                        >
                        <p
                          style="width: 100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"
                        >{{item.name}}</p>
                      </a>
                    </div>
                  </el-col>
                </el-row>
              </dd>
            </dl>
            <!-- 显示组建内容 -->
            <!-- <keep-alive> -->
            <!-- <router-view/> -->
            <!-- </keep-alive> -->
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
export default {
  data() {
    return {
      category: [
        {
          id: 1,
          name: "水果",
          img: "/static/jingjing.jpg"
        },
        {
          id: 2,
          name: "蔬菜",
          img: "./asset/jingjing.jpg"
        },
        {
          id: 3,
          name: "肉禽蛋品",
          img: "asset/jingjing.jpg"
        },
        {
          id: 4,
          name: "水产海鲜",
          img: "public/imgs/jingjing.jpg"
        },
        {
          id: 5,
          name: "水果",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 6,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 7,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 8,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 9,
          name: "熟食面点"
        },
        {
          id: 10,
          name: "熟食面点"
        },
        {
          id: 11,
          name: "熟食面点"
        },
        {
          id: 12,
          name: "熟食面点"
        },
        {
          id: 13,
          name: "熟食面点"
        },
        {
          id: 14,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 15,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        },
        {
          id: 16,
          name: "熟食面点",
          img: "../public/imgs/jingjing.jpg"
        }
      ],
      menu: [],
      datalist: [],
      typetitle: ""
    };
  },
  created() {
    this.$axios
      .get("http://193.112.60.97:19011/menu", {
        // params: {
        //   category: "水果",
        //   type:"奇异果"
        // }
      })
      .then(({ data: menu }) => {
        // console.log(data)
        this.menu = menu;
        // console.log('menu',this.menu)
      });
  },
  methods: {
    getData(name) {
      this.$axios
        .get("http://193.112.60.97:19011/goodslist", {
          params: {
            category: name,
            hotsale: true
          }
        })
        .then(({ data }) => {
          this.datalist = data;
          // console.log("data", this.datalist);
          this.typetitle = this.datalist[0].typetitle;
          // this.menu = menu;
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.el-header {
  font: 400 0.17rem/0.44rem "黑体";
  padding: 0 0.1rem;
  text-align: center;
  position: fixed;
  top: 0;
  z-index: 90;
  background: #fff;
  width: 100%;
  .el-row {
    .el-col {
      a.city {
        padding: 0rem 0.28rem 0rem 0.15rem;
        background-size: 0.23rem 5.37rem;
        color: #333;
        display: block;
      }
      .el-input {
        input {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          height: 0.3rem;
          font: 400 0.15rem/0.29rem "黑体";
          color: #000;
          // background: url(//image.benlailife.com/static/images/top/top_new_98624a41.png)
          //   0.1rem -4.23rem no-repeat #f3f3f3;
          border: 1px solid #f3f3f3;
          // background-size: 0.23rem 5.37rem;
          width: 100%;
          padding: 0.05rem 0.35rem 0.05rem 0.32rem;
          box-sizing: border-box;
          margin-top: 0.07rem;
          border-radius: 0.02rem;
        }
      }
    }
  }
}
.el-main {
  padding: 0;
  margin: 0.44rem 0rem 0.49rem;
  .cate_left {
    // overflow-y: auto;
    overflow-x: hidden;
  }

  .categoryMore {
    width: 100%;
    height: 100%;
    li {
      float: left;
      width: 100%;
      padding: 0.15rem 0rem;
      text-align: center;
      position: relative;
      z-index: 0;
      a {
        border-left: 0.02rem solid #9dd300;
        color: #9dd300;
        display: block;
      }
    }
  }
  .main_r {
    margin-top: 0;
    padding: 0 0.1rem;
    .all {
      width: 100%;
      margin-bottom: 0.1rem;
      font-size: 0.14rem;
      color: #333;
      line-height: 0.44rem;
      text-align: center;
      background-color: #fff;
      position: relative;
      z-index: 0;
    }
    dl {
      dt {
        .dt-l,
        .dt-r {
          display: block;
          color: #333;
          font-size: 0.14rem;
          line-height: 0.4rem;
          font-weight: 700;
        }
        .dt-r {
          text-align: right;
          padding-right: 0.1rem;
        }
      }
      dd {
        .el-row {
          .el-col {
            width: 100%;
            .dd-item {
              float: left;
              width: 33.33333%;
              text-align: center;
              margin-bottom: 0.1rem;
              a {
                p {
                  font-size: 0.12rem;
                  line-height: 0.25rem;
                  color: #666;
                }
              }
            }
          }
        }
      }
    }
  }
  // .el-row {
  //   .el-col {
  //     // overflow-y: auto;
  //     .categoryMore {
  //       width: 100%;
  //       height: 100%;
  //       li {
  //         float: left;
  //         width: 100%;

  //         text-align: center;
  //         position: relative;
  //         z-index: 0;
  //         a {
  //           border-left: 0.02rem solid #9dd300;
  //           color: #9dd300;
  //           display: block;
  //           padding: 0.15rem 0rem;
  //         }
  //       }
  //     }
  //     .all {
  //       margin: 0rem 0.1rem 0rem 1rem;
  //       width: 100%;
  //       // margin-bottom: 0.1rem;
  //       font-size: 0.14rem;
  //       color: #333;
  //       line-height: 0.44rem;
  //       text-align: center;
  //       background-color: #fff;
  //       position: relative;
  //       z-index: 0;
  //     }
  //     dl {
  //       dt {
  //         float: left;
  //         width: 100%;
  //         // margin-bottom: 0.1rem;
  //         a {
  //           display: block;
  //           color: #333;
  //           font-size: 0.14rem;
  //           line-height: 0.4rem;
  //           font-weight: 700;
  //         }
  //       }
  //       dd {
  //         float: left;
  //         width: 100%;
  //         background-color: #fff;
  //         padding-top: 0.1rem;
  //         .middle {
  //           margin-bottom: 0.1rem;

  //           p {
  //             font-size: 0.12rem;
  //             line-height: 0.25rem;
  //             color: #666;
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
