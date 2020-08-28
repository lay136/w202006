<!-- 结构 -->
<template>
    <div id="Home">
        <p>this is home page</p>
    </div>
</template>
<!-- 逻辑 -->
<script>

    export default {
        name:'Home',
    }
</script>
<!-- 样式 -->
<style scoped lang="less">
    #Home{
		p{
			color:red;
			.rem(padding,10px)
		}
    }
</style>