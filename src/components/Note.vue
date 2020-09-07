<template>
    <div>
        <h3>留言板</h3>
        <input type="text" v-model="msg">
        <button @click="addnote">发表留言</button>
        <ol>
            <li v-for="(message, index) in msg_list">{{message}}</li>
            <button @click="addone">删除</button>
        </ol>

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
            addone(){
                alert('aaa')
            }
        }
    }
</script>

<style scoped>

</style>
