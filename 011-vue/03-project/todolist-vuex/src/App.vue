<!-- 结构 -->
<template>
    <div id="App">
        <Header />
        <List />
        <Footer />
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    import Header from './pages/Header.vue';
    import List from './pages/List.vue';
    import Footer from './pages/Footer.vue';

    export default {
        name:'App',
        data(){
            return {
                
            }
        },
        //2.注册组件
        components: {
           Header,
           List,
           Footer 
        },
        methods:{
        }
    }
</script>
<!-- 样式 -->
<style>
    #App{
        width: 600px;
        margin: 50px auto;
    }
</style>
