import Vue from 'vue'
import Router from 'vue-router'

import Note from "../components/Note";
import User from "../components/User";
import UserDetail from "../components/UserDetail";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/note', component: Note},
        {path: '/user', component: User},
        {path: '/detail/:id', component: UserDetail},
        {path: '/', redirect: '/note'},
    ]
})
