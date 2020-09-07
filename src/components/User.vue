<template>
    <div>
        <form>
            用户名: <input type="text" v-model="username">
            年  龄: <input type="text" v-model="age">
            <button @click="adduser">添加</button>
        </form>
        <h3>用户列表</h3>
        <table border="1" cellspacing="0">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{index}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>删除 | 查看详情</td>
<!--                <td>删除| <router-link :to="`/detail/${user.id}`">查看用户详情</router-link> |-->
<!--                </td>-->
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
                username: '',
                age: '',
                users: localStorage.user_list ? JSON.parse(localStorage.user_list) : [],
            }
        },
        methods: {
            adduser(){
                this.users.unshift({
                    name: this.username,
                    age: this.age
                });
                localStorage.user_list = JSON.stringify(this.users);
                this.username = '';
                this.age = '';
            }
        }


    }
</script>

<style scoped>

</style>
