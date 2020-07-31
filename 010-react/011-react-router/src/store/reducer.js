/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 15:35:54
*/
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as todoListReducer } from '../pages/todolist/store/index.js'

export default combineReducers({
	todolist:todoListReducer,
})