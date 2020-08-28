<!-- 结构 -->
<template>
    <div id="App">
        <Home />
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    import Home from 'pages/home/index.vue'

    export default {
        name:'App',
        data(){
            return {
                
            }
        },
        //2.注册组件
        components: {
           Home
        },
        methods:{
        }
    }
</script>
<!-- 样式 -->
<style>
    #App{
      
    }
</style>
