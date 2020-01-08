import Vue from 'vue';
import Router from 'vue-router'
import PageNotFound from '@/pages/PageNotFound'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            name: 'NotFound',
            redirect: {name: PageNotFound}
        }
    ],
    mode: 'history'
})

export default router
