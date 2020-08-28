<template>
	<div id="Footer">
		<input type="checkbox" v-model="allTodo">
		<span>{{ selectTodo }}/{{ total }}</span>
		<button @click="handleSelectTodo()">删除选中</button>
	</div>
</template>

<script>
	import { SELECT_ALL_TODO,DELETE_ALL_TODO } from '../store/types.js'
	import { mapGetters } from 'vuex'
	export default {
		name:'Footer',
		computed:{
			/*
			total:function(){
				return this.$store.getters.total
			},
			selectTodo:function(){
				return this.$store.getters.selectTodo
			},
			*/
			// 使用对象展开运算符将 getter 混入 computed 对象中
			...mapGetters([
				'total',
				'selectTodo'
			]),
			allTodo:{
				get(){
					return this.$store.getters.allTodo
				},
				set(value){
					this.$store.dispatch(SELECT_ALL_TODO,value)
				}
			}
		},
		methods:{
			handleSelectTodo(){
				if(window.confirm('你确定要删除选中的任务吗?')){
					this.$store.dispatch(DELETE_ALL_TODO)
				}
			}
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