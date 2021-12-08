import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export const constantRouterMap = [
	{path: '/login', component: () => import('@/views/login/index')},
	{path: '/register', component: () => import('@/views/register/index')},
	{path: '/home', component: () => import('@/views/home/index')},
	{path: '', component: () => import('@/views/home/index')}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
