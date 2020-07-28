/*
* @Author: Chen
* @Date:   2020-07-28 10:35:29
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 10:41:05
*/
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
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