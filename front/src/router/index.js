import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paths from '../constants/paths.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Paths.HOME,
    component: Home
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import(/* webpackChunkName: "Switch" */ '../views/Switch.vue')
  },
  {
    path: '/user',
    name: Paths.USER,
    component: () => import(/* webpackChunkName: "User" */ '../views/User.vue')
  },
  {
    path: '/user/create',
    name: Paths.USER_CREATE,
    component: () => import(/* webpackChunkName: "UserCreate" */ '../views/UserCreate.vue')
  },
  {
    path: '/user/login',
    name: Paths.USER_LOGIN,
    component: () => import(/* webpackChunkName: "UserLogin" */ '../views/UserLogin.vue')
  }
  // {
  //   path: '/',
  //   name: Paths.HOME,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue')
  // }

  // todo 404 page here
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
