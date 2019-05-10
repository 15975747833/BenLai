import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentcity:"北京",
    browseRecord_city:[],
    goodslist:[]


  },
  mutations: {
    saveCurrentCity(state,payload){
      state.currentcity = payload;
      console.log('currentcity',state.currentcity)
    },
    saveBrowseRecord_city(state,payload){
      // 判断state.browseRecord_city的存储长度不大于6个
      if(state.browseRecord_city.length>=6){
        state.browseRecord_city.slice(0,5)
      }else{
        // 对数组进行去重后存入state.browseRecord_city
        state.browseRecord_city = Array.from(new Set(state.browseRecord_city));
        state.browseRecord_city.unshift(payload);
      }
    },
    add2cart(state,payload){
      // state就是store.state
      // payload就是执行add2cart时传入的参数
      state.goodslist.unshift(payload);
  },

  // 删除商品
  removeFromCart(state,{proId}){
      state.goodslist = state.goodslist.filter(goods=>goods.proId!=proId)
  },

  // 修改数量
  changeQty(state,{goodsNum,qty}){
      state.goodslist = state.goodslist.map(goods=>{
          if(goods.goodsNum == goodsNum){
              goods.qty = qty
          }

          return goods;
      })
  }
  },
  actions: {

  }
})
