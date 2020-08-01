/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-30 15:33:34
*/
import { fromJS } from 'immutable';

const defaultState = fromJS({
	list:['吃饭','睡觉','敲代码','学习'],
	task:''
})
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
	LOAD_DATA,
} from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == CHNAGE_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state))
		newState.task = action.payload

		return newState
		*/
		return state.set('task',action.payload)
	}
	else if(action.type == ADD_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.task);
		newState.task = '';
		return newState;
		*/
		const list = [...state.get('list')]
		list.push(state.get('task'));
		return state.merge({
			list,
			task:''
		})
	}
	else if(action.type == DEL_ITEM){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.payload,1);
		return newState;
		*/
		const list = [...state.get('list')]
		list.splice(action.payload,1);
		return state.set('list',list);
	}
	else if(action.type == LOAD_DATA){
		/*
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.payload
		return newState;
		*/
		return state.set('list',action.payload)
	}
	return state;
}