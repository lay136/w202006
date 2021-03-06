/*
* @Author: Chen
* @Date:   2020-08-25 09:21:01
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 09:22:28
*/
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import store from './store/index.js'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


