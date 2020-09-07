<template>
    <div>
        获取查询用户的下标：{{$route.params.id}}
        <br>
        获取查询用户的姓名：{{$route.params.name}}
        <br>
        获取查询用户的年龄：{{$route.params.age}}
        <br>
        <button>
            <router-link :to="`/note`">返回主页</router-link>
        </button>
        <button>
            <router-link :to="`/user`">返回用户列表页</router-link>
        </button>

    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        methods: {
            index(){

            }
        }
    }
</script>

<style scoped>

</style>
