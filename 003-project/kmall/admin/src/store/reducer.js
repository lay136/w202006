/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-01 17:19:06
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as todoListReducer } from 'pages/todolist/store/index.js'
import { reducer as loginReducer } from 'pages/login/store/index.js'
import { reducer as homeReducer } from 'pages/home/store/index.js'

export default combineReducers({
	login:loginReducer,
	home:homeReducer,
})