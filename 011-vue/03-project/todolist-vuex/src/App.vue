<!-- 结构 -->
<template>
    <div id="App">
        <Header :addTodo="addTodo" />
        <List :todos="todos" :delTodo="delTodo" />
        <Footer 
            :todos="todos"
            :selectAllTodo="selectAllTodo"
            :deleteSelectTodo="deleteSelectTodo"
        />
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
            addTodo(todo){
                this.todos.unshift(todo)
            },
            delTodo(index){
                this.todos.splice(index,1);
            },
            selectAllTodo(value){
                this.todos.forEach((item)=>{
                    item.tag = value
                })
            },
            deleteSelectTodo(){
                this.todos = this.todos.filter((item)=>item.tag != true)
                /*
                var arr = [];
                this.todos.forEach((item)=>{
                    if(!item.tag){
                        arr.push(item)
                    }
                })
                this.todos = arr;
                */
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
