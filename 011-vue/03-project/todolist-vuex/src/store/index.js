/*
* @Author: Chen
* @Date:   2020-08-27 09:14:36
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 09:23:11
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import state from './state.js'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})