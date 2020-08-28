/*
* @Author: Chen
* @Date:   2020-08-27 09:12:54
* @Last Modified by:   Chen
* @Last Modified time: 2020-08-27 11:31:25
*/
export default {
	total(state){
		return state.todos.length
	},
	selectTodo(state){
		return state.todos.reduce((total,item)=>{
			if(item.tag){
				total = total + 1;
			}
			return total;
		},0)
	},
	allTodo(state,getters){
		return (getters.total == getters.selectTodo) && (getters.total !=0)
	}
}