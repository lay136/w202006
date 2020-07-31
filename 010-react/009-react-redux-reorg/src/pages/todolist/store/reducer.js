/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 16:05:42
*/
const defaultState = {
	list:['吃饭','睡觉','敲代码','学习'],
	task:''
}
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	LOAD_DATA,
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == CHNAGE_ITEM){
		const newState = JSON.parse(JSON.stringify(state))
		newState.task = action.payload

		return newState
	}
	else if(action.type == ADD_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task);
		newState.task = '';
		return newState;
	}
	else if(action.type == DEL_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
	}
	else if(action.type == LOAD_DATA){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload
		return newState;
	}
	return state;
}