import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incrementCount(state) {
      state.count++
    }
  },
  actions: {
    incrementCount(store) {
      store.commit('incrementCount')
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchUsers(store) {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    }
  },
  modules: {}
})
