import Vue from 'vue'
import router from '../router'
import { PLAN } from '../constants'
import HTTP from '../services/HttpService'
import { get } from 'lodash-es'

export default {
  namespaced: true,
  state: {
    current: null,
    items: [],
  },
  mutations: {
    /**
     * Sets the current selected plan
     *
     * @param state
     * @param {object} input    plan to set
     */
    setCurrent: function(state, input) {
        state.current = input
    },
    /**
     * Sets the Plans
     *
     * @param state
     * @param {array} input   list of plans
     */
    set: function (state, input) {
      Vue.set(state, 'items', input)
    },
    /**
     * Add a Project
     *
     * @param state
     * @param {object} input   project
     */
    post: function (state, input) {
      state.items.unshift(input)
    },
    /**
     * Patch a Plan via the id
     *
     * @param state
     * @param {object} input   plan
     */
    patch: function (state, input) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === input.id) {
          Vue.set(state.items, i, input)
          return
        }
      }
    }
  },
  actions: {
    /**
     * Create a Plan via the API
     *
     * @param context
     * @param {object} input
     * @return {Promise}
     */
    post: function (context, input) {
      return HTTP.post(PLAN.API.POST, input)
        .then(res => {
          if (get(router.currentRoute, 'query.page')) return

          context.commit('post',
            get(res, 'data.data'))
        })
    },
    /**
     * Patch a Plan via the API
     *
     * @param context
     * @param {object} input
     * @return {Promise}
     */
    patch: function (context, input) {
      return HTTP.patch(PLAN.API.PATCH + '/' + input.id, input)
      .then(res => {
        context.commit('patch',
          get(res, 'data.data'))
      })
    },
    /**
     * Remove a Plan via the API
     *
     * @param context
     * @param {number} id
     * @return {Promise}
     */
    remove: function (context, id) {
      return HTTP.remove(PLAN.API.DELETE + '/' + id)
      .then(() => {
        context.dispatch('get', router.currentRoute)
      })
    },
    /**
     * Get Plans via the API
     *
     * @param context
     * @param {object} input    input query
     * @return {Promise}
     */
    get: function (context, input) {
      return HTTP.get(PLAN.API.GET, { params: input.query })
      .then(res => {
        context.commit('set',
          get(res, 'data.data'))
      })
    }
  }
}

/**
 * @typedef {object} Meta
 *
 * @property {date}     [created]     Date User was created
 * @property {date}     [updated]     Date Users details last changed
 * @property {date}     [login]       Date User logged in
 * @property {boolean}  [verified]    If User has verified email
 */

/**
 * @typedef {object} User
 *
 * @property {number}   [id]          Unique ID
 * @property {string}   name          Name
 * @property {string}   email         Email
 * @property {string}   [password]    (Only used on creation)
 * @property {string}   [role]        Role [anon | user | admin]
 * @property {Meta}     [meta]        User meta details
 */
