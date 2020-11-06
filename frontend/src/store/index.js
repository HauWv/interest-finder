import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let baseUrl = new URL(
  'https://graph.facebook.com/search?limit=500&access_token=***REMOVED***'
)
// get access to URLSearchParams object
let params = baseUrl.searchParams
let completeUrl

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

    async setUrlParams({ store, dispatch }, { keyword, searchType, locale }) {
      // console.log(keyword, searchType, locale)
      params.set('q', keyword) // this one works
      params.set('type', searchType) // why is this and locale undefined?
      params.set('locale', locale)
      completeUrl = baseUrl.toString()
      // console.log(completeUrl)
    },

    async getInterests({ store, dispatch }, form) {
      // setUrlParams(form)
      await dispatch('setUrlParams', form)
      return await fetch(completeUrl, {
        method: 'GET'
      }).then(response => {
        return response
      })
    }

    // async callApi() {
    //   await axios.get(completeUrl).then(response => console.log(response))
    // }
  },
  modules: {}
})
