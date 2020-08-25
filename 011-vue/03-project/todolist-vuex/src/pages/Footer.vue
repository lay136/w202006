<template>
	<div id="Footer">
		<input type="checkbox" v-model="allTodo">
		<span>{{ selectTodo }}/{{ total }}</span>
		<button @click="handleSelectTodo()">删除选中</button>
	</div>
</template>

<script>
	export default {
		name:'Footer',
		computed:{
			total:function(){
				return this.todos.length
			},
			selectTodo:function(){
				return this.todos.reduce((total,item)=>{
					if(item.tag){
						total = total + 1;
					}
					return total;
				},0)
			},
			allTodo:{
				get(){
					return (this.total == this.selectTodo) && (this.total !=0)
				},
				set(value){
					this.selectAllTodo(value)
				}
			}
		},
		methods:{
			handleSelectTodo(){
				if(window.confirm('你确定要删除选中的任务吗?')){
					this.deleteSelectTodo();
				}
			}
		},
		props:{
			todos:Array,
			selectAllTodo:Function,
			deleteSelectTodo:Function
		},
	}
</script>

<style scoped>
	#Footer{
		width: 100%;
		margin-top: 10px;
	}
	#Footer button{
		float: right;
	}
</style>