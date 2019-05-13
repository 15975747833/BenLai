
<template>
  <div class="goods">
    <el-header style="height:0.44rem;padding:0;">
      <header class="mint-header cart">
        <div class="mint-header-button is-left" @click="prev()">
          <a class="router-link-active">
            <button class="mint-button mint-button--default mint-button--normal">
              <span class="mint-button-icon">
                <i class="mintui mintui-back"></i>
              </span>
              <label class="mint-button-text"></label>
            </button>
          </a>
        </div>
        <el-row :gutter="6">
          <el-col :span="8">商品</el-col>
          <el-col :span="8">评价</el-col>
          <el-col :span="8">详情</el-col>
        </el-row>
        <div class="mint-header-button is-right">
          <button class="mint-button mint-button--default mint-button--normal">
            <span class="mint-button-icon">
              <i class="mintui mintui-more"></i>
            </span>
            <label class="mint-button-text"></label>
          </button>
        </div>
      </header>
    </el-header>

    <div class="lbt" v-if="goods">
      <el-carousel trigger="click" height="414px">
        <el-carousel-item v-for="(item,idx) in goods.imgArr" :key="item.goodsNum">
          <img :src="item" alt="本来生活" style="width:100%;">
          <span>{{idx+1}}/{{goods && goods.imgArr.length}}</span>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="address" v-if="goods">
      <p class="price" style="color: #ff6900;padding:0.12rem 0 0.06rem 0;">
        <span style="font-size:0.28rem">￥{{goods.price.price}}</span>
        <del style="color:#999;margin:0 0.08rem;">￥{{goods.price.origPrice}}</del>
        <span>{{goods.promotionsTags[0][0]}}</span>
      </p>
      <h3 style="color:#000;padding:0.06rem 0;">{{goods.productName}}</h3>
      <p class="content" style="color:#999;font-size:0.08rem;">{{goods.promotionWord}}</p>
      <p style="padding-top:16px;">送至 广东省广州市</p>
      <p>配送 广州市冷链配商品满99元包邮</p>
      <p>产地:海南</p>
    </div>
    <div class="addcart">
      <span class="share ico01 head_buy" id="detailcart">
        <div
          class="quantity digital"
          name="digital"
          data-val="6"
          style="opacity: 1;"
          @click="goto(goods)"
        >{{cartLen}}</div>购物车
      </span>
      <span id="wishBtnNew" class="share ico02">收藏</span>
      <input type="hidden" id="wishStatus" value="0">
      <span class="btn" @click="add2cart(goods)">加入购物车</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: null
    };
  },
  created() {
    let { goodsNum } = this.$route.params;
    // 根据id请求商品信息
    console.log("goodsNum", goodsNum);
    this.$axios
      .get("http://193.112.60.97:19011/goodslist", {
        params: {
          goodsNum
        }
      })
      .then(res => {
        let { data } = res;
        data.forEach(item => {
             if(!item.promotionsTags.length){
              item.promotionsTags = ["",""]
             }
           });
        this.goods = data[0];
        console.log(this.goods[0]);
      });
	},
	computed:{
      cartLen(){
          return this.$store.state.goodslist.length
      }
  },
  methods: {
    goto(goods) {
      let { type } = this.$route.params;
      this.$router.push({ name: "Cart", params: { goodsNum: goods.goodsNum } });
    },
      prev() {
            this.$router.push({ name: "List", params: { type: this.goods.type } });
          },
    add2cart(goods) {
			let { goodsNum, productName,category,type,imageUrl,promotionsTags} = this.goods;
			let proPrice = goods.price.price
      // 判断商品是否已经添加到购物车：是->qty++, 否：qty=1
      let has = this.$store.state.goodslist.filter(
        goods => goods.goodsNum == goodsNum
      )[0];
      if (has) {
        this.$store.commit("changeQty", { goodsNum, qty: has.qty + 1 });
      }else {
        this.$store.commit("add2cart", {
          promotionsTags,
          goodsNum,
          productName,
          proPrice,
          category,
          imageUrl,
					type,
          qty: 1
        });
      }
      let mystorage = this.$store.state.goodslist;
      let aa = JSON.stringify(mystorage)
      localStorage.setItem("cartData",aa);
    }
  }
};
</script>
<style lang="scss" scoped>
.goods {
  .el-header {
    .cart {
      width: 100%;
      height: 0.44rem;
      font: 400 0.18rem/0.44rem "黑体";
      color: #000;
      background: #fff;
      border-bottom: 1px solid #ccc;
    }
  }
  .lbt {
    margin: 0;
    background: pink;
    .el-carousel--horizontal {
      width: 100%;
    }
    .el-carousel__item {
      background: #fff;
      span {
        display: inline-block;
        width: 92px;
        height: 40px;
        color: #888;
        font-size: 10px;
        opacity: 0.75;
        line-height: 40px;
        position: absolute;
        right: -35px;
        bottom: 5px;
      }
    }
  }
  .address {
    padding: 0 0.06rem;
    margin-bottom: 0.5rem;
    p {
      height: 24px;
      line-height: 24px;
    }
  }
  .addcart {
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: #fff;
    height: 0.5rem;
    display: flex;
    span.share {
      width: 0.6rem;
      display: inline-block;
      text-align: center;
      font-size: 0.1rem;
      color: #666;
      box-sizing: border-box;
      padding-top: 0.32rem;
      background: url(//image.benlailife.com/static/images/goods_newmenu_bba9ac7e.png)
        no-repeat;
      background-size: 0.24rem;
      position: relative;
      z-index: 0;
      .quantity {
        position: absolute;
        z-index: 10;
        top: 0.04rem;
        right: 50%;
        margin-right: -0.2rem;
        color: #fff;
        border: 1px solid #fff;
        background-color: #ff6900;
        padding: 0rem 0.08rem;
        font-size: 0.18rem;
        line-height: 0.27rem;
        height: 0.28rem;
        border-radius: 1rem;
        min-width: 0.28rem;
        text-align: center;
        box-sizing: border-box;
        -webkit-transform-origin: right 0;
        transform-origin: right 0;
        -webkit-transform: scale(0.5, 0.5);
        transform: scale(0.5, 0.5);
      }
    }
    span.ico01 {
      background-position: center 0.07rem;
    }
    span.ico02 {
      background-position: center -0.42rem;
    }
    span.btn {
      display: block;
      flex: 1;
      background-image: linear-gradient(90deg, #ff9600 0, #ff6900 100%);
      color: #fff;
      text-align: center;
      line-height: 0.49rem;
      font-size: 0.16rem;
    }
  }
}
</style>