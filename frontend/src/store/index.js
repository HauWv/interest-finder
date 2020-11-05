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
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },

    async toggleStarred(store, interest) {
      // make this togglestarred
      await axios.patch(`/api/interests/${interest.name}`, {
        starred: !interest.starred
      })

      interest.starred = !interest.starred
    },

    async testInterest(store, name) {
      await axios.patch(`/api/interests/${name}`, {
        tested: true
      })
    },

    async fetchStarredInterest(store, id) {
      const interestRequest = await axios.get(`/api/interests/${id}`)
      return interestRequest.data
    },
    async fetchStarredInterests() {
      const interestsRequest = await axios.get('/api/interests')
      return interestsRequest.data
    },
    async fetchInterests() {
      // do api call here
    }
  },
  modules: {}
})
