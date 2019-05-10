<template>
  <div id="app">
    <el-container>
      <el-header style="height:0.44rem;">
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple" @click="goto('/Address')">
              <a href="#" class="city">
                佛山
                <i class="el-icon-arrow-down"></i>
              </a>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <el-input placeholder="请输入内容" @focus="goto('/search')">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-container>
          <!-- left -->
          <el-aside width="25%">
            <el-menu class="el-menu-vertical-demo" >
              <el-menu-item v-for="item in menu" :key="item._id" @click="getData(item.name)" text-color="#333">
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu>
            <!-- 原生结构 start -->
            <!-- <ul class="main_l">
              <li
                v-for="item in menu"
                :key="item._id"
                @click="getData(item.name)"
                ref="main_li"
              >
                <span>{{item.name}}</span>
              </li>
            </ul> -->
             <!-- 原生结构 end -->
          </el-aside>
          <!-- right -->
          <el-main class="main_r">
            <!-- 大类 -->
            <div class="all">
              <a href="#">全部{{currentCategory}}</a>
            </div>
            <dl v-for="child in subclass" :key="child.index">
              <dt>
                <el-row>
                  <el-col :span="20">
                    <div class="grid-content bg-purple dt-l">{{child[0].typetitle}}</div>
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
                  <el-col>
                    <div
                      class="grid-content bg-purple dd-item"
                      v-for="item in child"
                      :key="item._id"
                    >
                      <a href="#">
                        <img
                          class="lazy"
                          :src="item.imageUrl"
                          style="width: 62px; height: 62px; opacity: 1; margin:0 auto;"
                        >
                        <p
                          style="width: 100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"
                        >{{item.type}}</p>
                      </a>
                    </div>
                  </el-col>
                </el-row>
              </dd>
            </dl>
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
      // @params  currentCategory 当前点击的大类名字
      // menu 大类总名字
      // datalist 当前渲染的数据
      // typetitle 当前渲染数据的中类
      currentCategory: [],
      menu: [],
      datalist: [],
      typetitle: "",
      subclass: []
    };
  },
  created() {
    this.$axios
      .get("http://193.112.60.97:19011/menu", {})
      .then(({ data: menu }) => {
        this.menu = menu;
      });
  },
  methods: {
    getData(name) {
      (this.subclass = []),
        this.$axios
          .get("http://193.112.60.97:19011/goodslist", {
            params: {
              category: name,
              hotsale: true
            }
          })
          .then(({ data }) => {
            this.datalist = data;
            this.typetitle = this.datalist[0].typetitle;
            // 点击menu 把当前category保存下来
            this.currentCategory = name;
            // console.log("origin",this.datalist);

            // 把data中的typetitle种类保存下来,得到种类为typetitle的数据 过滤出data中含有typetitle的数据
            let peon = de_duplication(this.datalist);
            // console.log("peon", peon);

            function de_duplication(arr) {
              let obj = {};
              let peon = arr.reduce((cur, next) => {
                obj[next.typetitle]
                  ? ""
                  : (obj[next.typetitle] = true && cur.push(next));
                return cur;
              }, []); //设置cur默认类型为数组，并且初始值为空的数组
              //获取总类的数组--单独
              return peon.map(item => item.typetitle);
            }

            // filter 出datalist里面typetitle属性的数据
            for (let i = 0; i < peon.length; i++) {
              let aa = [];
              aa = this.datalist.filter(item => item.typetitle == peon[i]);
              // console.log('分类后',this.subclass);
              // console.log("aa=",aa)
              this.subclass.push(aa);
            }
            // console.log("this.subclass=",this.subclass)
          });
          
    },
    goto(path) {
      this.$router.push(path);
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
        padding: 0rem 0.28rem 0rem 0rem;
        background-size: 0.23rem 5.37rem;
        color: #333;
        display: block;
        position: relative;
        i {
          position: absolute;
          top: 0.14rem;
          right: 0.18rem;
        }
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
  background: #f9f9fb;

  .el-aside {
    .main_l {
      overflow-y: auto;
      li {
        float: left;
        background: #fff;
        width: 100%;
        text-align: center;
        padding: 0.15rem 0rem;
        &:active {
          color: #9dd300;
          span {
            border-left: 0.02rem solid #9dd300;
          }
        }
        // border-bottom:1px solid #ccc;
        span {
          // border-left: 0.02rem solid #9dd300;
          color: #333;
          line-height: 0.2rem;
          padding-right: 0.02rem;
          font-size: 0.14rem;
          display: block;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            left: -50%;
            bottom: -0.16rem;
            width: 200%;
            height: 1px;
            background: #ddd;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
          }
        }
      }
    }
  }
  // .cate_left {
  //   // overflow-y: auto;
  //   overflow-x: hidden;
  // }

  // .categoryMore {
  //   width: 100%;
  //   height: 100%;
  //   li {
  //     float: left;
  //     width: 100%;
  //     padding: 0.15rem 0rem;
  //     text-align: center;
  //     position: relative;
  //     z-index: 0;
  //     a {
  //       border-left: 0.02rem solid #9dd300;
  //       color: #9dd300;
  //       display: block;
  //     }
  //   }
  // }
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
