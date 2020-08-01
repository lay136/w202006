/*
* @Author: Chen
* @Date:   2020-07-28 10:35:29
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 16:42:40
*/
import axios from 'axios'
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	LOAD_DATA
} from './actionTypes.js'

export const getChangeItemAction = (val)=>({
	type:CHNAGE_ITEM,
	payload:val
})
export const getAddItemAction = ()=>({
	type:ADD_ITEM
})
export const getDelItemAction = (index)=>({
	type:DEL_ITEM,
	payload:index
})

export const getLoadDataAction = (data)=>({
	type:LOAD_DATA,
	payload:data
})

export const getRequestLoadDataAction = ()=>{
	return (dispatch,getState)=>{
		//首先发送请求在生成action对象
		axios.get('http://127.0.0.1:3000')
		.then(result=>{
			// console.log(result)
			//在这里真正派发action
			dispatch(getLoadDataAction(result.data))
		})
		.catch(err=>{
			console.log(err);
		})
	}
}