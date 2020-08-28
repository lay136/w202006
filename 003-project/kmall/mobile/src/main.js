/*
* @Author: Chen
* @Date:   2020-08-25 09:21:01
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 17:19:03
*/
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

//加载全局CSS样式
import './assets/css/common.css'

import store from './store/index.js'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


