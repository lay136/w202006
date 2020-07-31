/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 11:16:28
*/
import { combineReducers } from 'redux'
import { reducer as todoListReducer } from '../pages/todolist/store/index.js'
import { reducer as homeReducer } from '../pages/home/store/index.js'

export default combineReducers({
	todolist:todoListReducer,
	home:homeReducer
})