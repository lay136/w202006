<template>
	<div id="Footer">
		<input type="checkbox">
		<span>1/2</span>
		<button>删除选中</button>
	</div>
</template>

<script>
	export default {
		name:'Footer'
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