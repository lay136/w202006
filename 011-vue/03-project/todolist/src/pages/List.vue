<template>
	<div id="List">
		<Item 
			v-for="(todo,index) in todos"
			:key="index"
			:todo="todo"
		/>
	</div>
</template>

<script>
	import Item from './Item.vue';
	export default {
		name:'List',
		props:{
			todos:Array
		},
		components: {
           Item,
        },
	}
</script>

<style scoped>
	
</style>