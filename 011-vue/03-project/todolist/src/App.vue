<!-- 结构 -->
<template>
    <div id="App">
        <Header :addTodo="addTodos" />
        <List :todos="todos" />
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
                todos:[
                    {
                        task:'学习',
                        tag:true
                    },
                    {
                        task:'敲代码',
                        tag:true
                    }
                ]
            }
        },
        //2.注册组件
        components: {
           Header,
           List,
           Footer 
        },
        methods:{
            addTodos(todo){
                this.todos.unshift(todo)
            }
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
