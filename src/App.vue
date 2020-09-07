<template>
    <div id="app">
        <h3>管理系统</h3>
        <router-link to="/note">留言板</router-link>

        <hr>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>

</style>
