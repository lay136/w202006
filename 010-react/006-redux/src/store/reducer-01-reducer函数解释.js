/*
* @Author: Chen
* @Date:   2020-07-27 16:59:44
* @Last Modified by:   Chen
* @Last Modified time: 2020-07-28 10:14:41
*/
const defaultState = {
	list:['吃饭','睡觉','敲代码','学习'],
	task:''
}
import {
	CHNAGE_ITEM,
	ADD_ITEM,
	DEL_ITEM,
} from './actionTypes.js'

/*
	1.reducer是一个纯函数(有固定的输入就有固定的输出),主要功能是用来处理业务数据的
	2.reducer不能够直接修改store传递过来的state,因为store中的state只能由store进行管理
	并且store中的state由所有组件所共享
	3.getState方法获取的始终是store中的state
	4.reducer修改完数据后会返回一个newState,store会根据这个newState修改自身state
*/

export default (state=defaultState,action)=>{
	// console.log('reducer::',state)
	// console.log('reducer::',action)
	if(action.type == CHNAGE_ITEM){
		//错误写法
		// state.task = action.payload + Date.now();
		// state.task = action.payload + Math.random();
		// state.task = action.payload

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
	return state;
}