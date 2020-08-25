<!-- 结构 -->
<template>
    <div id="App">
        <Logo />
        <Message task="Tom" />
        <p>this is App page</p>
    </div>
</template>
<!-- 逻辑 -->
<script>
    //1.引入组件
    import Logo from './pages/Logo.vue';
    import Message from './pages/Message.vue';

    export default {
        name:'App',
        //2.注册组件
        components: {
            Logo,
            Message
        }
    }
</script>
<!-- 样式 -->
<style>

</style>
