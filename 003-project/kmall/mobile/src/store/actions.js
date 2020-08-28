/*
* @Author: Chen
* @Date:   2020-08-27 09:11:56
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 15:04:11
*/
//组件中用由this.$store.dispatch方法来派发action
//action中用commit来提交mutation
//action中可以包含异步操作
import { ADD_TODO,DEL_TODO,SELECT_ALL_TODO,DELETE_ALL_TODO } from './types.js'
export default {
	[ADD_TODO]({commit},todo){
		commit(ADD_TODO,todo)
	},
	[DEL_TODO]({commit},index){
		commit(DEL_TODO,index)
	},
	[SELECT_ALL_TODO]({commit},value){
		commit(SELECT_ALL_TODO,value)
	},
	[DELETE_ALL_TODO]({commit}){
		commit(DELETE_ALL_TODO)
	},
}