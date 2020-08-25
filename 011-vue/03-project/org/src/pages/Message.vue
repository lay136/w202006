<template>
	<div id="Message">
		<h1>hello Vue , {{ task }}</h1>
		<p>this is message page</p>
	</div>
</template>

<script>
	export default {
		name:'Message',
		props:{
			task:String
		}
	}
</script>

<style scoped>
	p{
		color: red;
	}
</style>