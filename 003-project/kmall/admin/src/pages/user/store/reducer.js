/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-03 17:45:29
*/
import { fromJS } from 'immutable';

const defaultState = fromJS({
	list:[],
})
import * as types from './actionTypes.js'

export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.set('list',fromJS(action.payload.list))
	}
	
	return state;
}