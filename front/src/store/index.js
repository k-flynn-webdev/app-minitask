import Vue from 'vue'
import Vuex from 'vuex'

import user from './user.js'
import toasts from './toasts.js'
import tasks from './tasks.js'
import projects from './projects.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    toasts,
    user,
    tasks,
    projects
  }
})