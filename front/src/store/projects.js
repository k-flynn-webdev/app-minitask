import Vue from 'vue'
import ProjectService from '../services/ProjectService.js'

import general from '../constants/general'

export default {
  namespaced: true,
  state: {
    projects: [general.DEFAULT_PROJECT()],
    current: general.DEFAULT_PROJECT()
  },
  getters: {
    /**
     * Returns current project
     *
     * @param state
     * @returns {object}
     */
    current: (state) => state.current,
    /**
     * Returns all projects
     *
     * @param state
     * @returns {Array}
     */
    projects: (state) => state.projects,
    /**
     * Returns a function to get a project by ID
     *
     * @param {object}      state
     * @param {string}      id
     * @returns {function}
     */
    project: (state) => (id) => {
      return state.projects.find(item => item.id === id)
    }
  },
  mutations: {
    /**
     * Sets current project selected
     *
     * @param           state
     * @param {object}  input   project object
     * @returns {object}
     */
    projectCurrent: (state, input) => {
      Vue.set(state, 'current', input)
    },
    /**
     * Add a new project to the store
     *
     * @param {object}    state
     * @param {object}    input project obj
     * @returns {object}  new project
     */
    projectAdd: function (state, input) {
      state.projects.unshift(input)
      return input
    },
    /**
     * Replace a project item with an updated version
     *
     * @param {object}    state
     * @param {object}    input project
     * @returns {object}  new project
     */
    projectReplace: function (state, input) {
      for (let i = 0, max = state.projects.length; i < max; i++) {
        if (state.projects[i].id === input.id) {
          Vue.set(state.projects, i, input)
          return state.projects[i]
        }
      }
    },
    /**
     * Remove a project item
     *
     * @param {object}    state
     * @param {object}    input project
     * @returns {object}  project removed
     */
    projectRemove: function (state, input) {
      for (let i = 0, max = state.projects.length; i < max; i++) {
        if (state.projects[i].id === input.id) {
          Vue.delete(state.projects, i)
          return input
        }
      }
    },
    /**
     * Sets all project items
     *
     * @param {object}    state
     * @param {array}     input projects
     */
    projectSet: function (state, input) {
      Vue.set(state, 'projects', input)
    }
  },
  actions: {
    /**
     * Creates a project and adds to store
     *
     * @param {object}    context
     * @param {object}    input project info
     * @returns {promise} new project
     */
    create: function (context, input) {
      return ProjectService.create(input)
        .then(res => {
          context.commit('projectCurrent', res.data.data.project)
          return context.commit('projectAdd', res.data.data.project)
        })
    },
    /**
     * Update a project and store
     *
     * @param {object}    context
     * @param {object}    input project obj
     * @returns {promise} updated project
     */
    update: function (context, input) {
      return ProjectService.update(input)
        .then(res => {
          context.commit('projectReplace', res.data.data.project)
          if (context.getters.current.id !== input.id) return
          return context.commit('projectCurrent', res.data.data.project)
        })
    },
    /**
     * Remove a project and remove from store
     *  and reset the current project ..
     *
     * @param {object}    context
     * @param {object}    input project obj
     * @returns {promise} updated project
     */
    remove: function (context, input) {
      return ProjectService.remove(input)
        .then(() => {
          context.commit('projectRemove', input)
          if (context.getters.current.id !== input.id) return
          return context.commit('projectCurrent', context.getters.projects[0])
        })
    },
    /**
     * Get all projects created by the user ID
     *      if no projects, will create a basic
     *      anon project via api and return
     *
     * @param {object}    context
     * @param {object}    input params
     * @returns {promise} all tasks
     */
    getProjectsByUserId: function (context, input) {
      return ProjectService.all(input)
        .then(res => {
          if (res.data.data.projects.length < 1) {
            const temp = general.DEFAULT_PROJECT(input.user)
            return context.dispatch('create', temp)
          }

          context.commit('projectSet', res.data.data.projects)
          return context.commit('projectCurrent', context.getters.projects[0])
        })
    }
    // for delayed/time consuming actions
  }
}
