import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/pages/PageNotFound'
import Home from '@/pages/Home'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '*',
		name: 'notFound',
		redirect: {name: PageNotFound}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
