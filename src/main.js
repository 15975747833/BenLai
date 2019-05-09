import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// 只支持ajax请求
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
