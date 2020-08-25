<template>
	<div id="Header">
		<h1>TodoList</h1>
		<input 
			v-model="task"
			type="text"
			@keyup.enter="handleAdd()"
		>
	</div>
</template>

<script>
	export default {
		name:'Header',
		data(){
			return {
				task:''
			}
		},
		methods:{
			handleAdd(){
				//1.验证数据
				var task = this.task.trim()
				if(!task){
					window.confirm('请输入任务!!')
					return 
				}
				//2.生成任务对象
				var todo = {
					task,
					tag:false
				}
				//3.将任务对象添加到目标数组
				this.addTodo(todo)
				//4.清空输入框值
				this.task = '';
			}
		},
		props:{
			addTodo:Function
		}
	}
</script>

<style scoped>
	#Header{
		width: 100%;
		text-align:center;
	}
	#Header input{
		width: 100%;
		height: 34px;
		padding-left: 10px;
		box-sizing: border-box;
	}

</style>