import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: false
  },
  mutations: {
    showNotification(state) {
      state.isActive = true
    },
    hideNotification(state) {
      state.isActive = false
    }
  },
  actions: {
    messageHandler({ commit }) {
      commit('showNotification')
      setTimeout(() => {
        commit('hideNotification')
      }, 1500)
    }
  }
})
