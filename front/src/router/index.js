import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import modes from '../constants/modes'
import Paths from '../constants/paths.js'
import Tasks from '../components/TasksList'
import Landing from '../components/Landing'
import Projects from '../components/ProjectsList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    props: { mode: modes.CLEAR },
    children: [
      { path: '', name: Paths.HOME, component: Landing }
    ]
  },
  {
    path: '/projects',
    component: Home,
    props: { mode: modes.PROJECTS },
    children: [
      {
        path: '',
        name: Paths.PROJECTS,
        props: {},
        component: Projects
      }
    ]
  },
  {
    path: '/project',
    component: Home,
    props: { mode: modes.PROJECTS },
    children: [
      {
        path: ':project',
        name: 'project',
        props: (route) => ({
          project: {
            mode: modes.TASKS,
            id: Number(route.params.project)
          }
        }),
        component: Tasks
      }
    ]
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

  // todo 404 page here
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
