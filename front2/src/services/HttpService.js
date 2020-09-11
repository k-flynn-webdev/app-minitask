import router from '../router'
import store from '../store'
import axios from 'axios'
// import Paths from '../constants/paths.js'
// import status from '../constants/status'

const USER_TOKEN = 'accessToken'

axios.defaults.headers.common['Accept-Version'] = 'v1'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

;(function init () {
  const token = localStorage.getItem(USER_TOKEN)
  if (!token) return
  authSet(token)
})()

function authSet (auth) {
  axios.defaults.headers.common.authorization = `Bearer ${auth}`
  localStorage.setItem(USER_TOKEN, auth)
}

function authRemove () {
  axios.defaults.headers.common.authorization = null
  localStorage.removeItem(USER_TOKEN)
}

// axios.interceptors.request.use((config) => {
// store.commit('setStatus', status.WAITING)
// return config
// }, (err) => Promise.reject(err))

axios.interceptors.response.use(httpSuccess, httpError)

function httpSuccess (res) {
  if (res.data && res.data.accessToken) {
    authSet(res.data.accessToken)
  }

  return res
}

function httpError (err) {
// if (error.response.data.status === 401) {
//   const isAnon = store.getters['user/isAnon']
//   const signOut = isAnon
//     ? store.dispatch('user/getAnonToken')
//     : store.dispatch('user/logout')
//
//   return signOut
//     .then(() => {
//       if (!isAnon) router.push({ name: Paths.USER_LOGIN })
//       throw error
//     })
// }
// store.commit('setStatus', status.ERROR)
  throw err
}

function get (url, params) {
  return axios.get(url, params)
}

function post (url, params) {
  return axios.post(url, params)
}

function put (url, params) {
  return axios.put(url, params)
}

function patch (url, params) {
  return axios.patch(url, params)
}

function remove (url, params) {
  return axios.delete(url, params)
}

const services = {
  get,
  post,
  put,
  patch,
  remove,
  authSet,
  authRemove
}
export default services