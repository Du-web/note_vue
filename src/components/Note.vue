<template>
    <div>
        <h3>留言板</h3>
        <input type="text" v-model="msg">
        <button @click="addnote">发表留言</button>
        <ol>
            <li v-for="(message, index) in msg_list" :key="index">
                <span>{{message}}</span>
                <a href="javascript:void (0);" @click="delone(index)">删除</a>
            </li>
        </ol>
        <span>总数量:{{msg_list.length}}条</span>
        <input type="button" value="删除所有" @click="delall" v-show="msg_list.length!=0">

    </div>
</template>

<script>
    export default {
        name: "Note",
        data: function () {
            return {
                msg: '',
                msg_list: localStorage.msgs ? JSON.parse(localStorage.msgs) : [],
            }

        },
        methods: {
            addnote(){
                let msg = this.msg;
                if (msg){
                    this.msg_list.unshift(msg);
                    localStorage.msgs = JSON.stringify(this.msg_list);
                    this.msg = '';
                }
            },
            delone(num){
                let msg1 = this.msg_list.splice(num, 1);
                console.log(msg1)
                localStorage.removeItem('msgs');
                localStorage.msgs = JSON.stringify(this.msg_list);
            },
            delall(){
                this.msg_list = [];
                localStorage.removeItem('msgs');
            }
        }
    }
</script>

<style scoped>

</style>
