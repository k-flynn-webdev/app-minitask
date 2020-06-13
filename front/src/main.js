import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    const user = this.$store.getters['user/user'].id
    return this.$store.dispatch('projects/getProjectsByUserId',
      { user })
  }
}).$mount('#app')
