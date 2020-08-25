<template>
	<div 
		id="Item"
		:style="{backgroundColor:bgColor}"
		@mouseenter="handleShow(true)"
		@mouseleave="handleShow(false)"
	>
		<input type="checkbox" v-model="todo.tag">
		<span>{{todo.task}}</span>
		<button v-if="isShow" @click="handleDel()">删除</button>
	</div>
</template>

<script>
	export default {
		name:'Item',
		data(){
			return {
				bgColor:'#fff',
				isShow:false
			}
		},
		props:{
			todo:Object,
			index:Number,
			delTodo:Function
		},
		methods:{
			handleShow(flag){
				this.bgColor = flag ? '#ccc' : '#fff';
				this.isShow = flag
			},
			handleDel(){
				if(window.confirm('您确定要删除该任务吗?')){
					this.delTodo(this.index)
				}
			}
		}
	}
</script>

<style scoped>
	#Item{
		width: 100%;
		height: 34px;
		line-height: 34px;
		margin-top: 10px;
		border: 1px dashed #ccc;
		box-sizing: border-box;
	}
	/*
	#Item:hover{
		background-color: #ccc;
	}
	#Item:hover button{
		display: block;
	}
	*/
	#Item input{
		/*vertical-align: middle;*/
		margin-right: 8px;
	}
	#Item button{
		/*display: none;*/
		float: right;
		margin-top: 4px;
	}
</style>