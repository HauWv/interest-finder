import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import user from '../../../backend/src/models/user'

Vue.use(Vuex)

let baseUrl = new URL(
  'https://graph.facebook.com/search?limit=500&access_token=677916593037704|gvX9a7sygGJ3nMNvSvr5WalhCCM'
)
// get access to URLSearchParams object
let params = baseUrl.searchParams
let completeUrl

const mutations = {
  INCREMENT_COUNT: 'increment count',
  SET_USER: 'set user',
  GET_INTERESTS: 'get interests'
}

const store = new Vuex.Store({
export default new Vuex.Store({
  state: {
    count: 0,
    response: [],
    user: null
  },
  mutations: {
    [mutations.INCREMENT_COUNT](state) {
      state.count++
    },

    [mutations.GET_INTERESTS](state, response) {
      state.response = response
    },

    // incrementCount(state) {
    //   state.count++
    // },

    // getInterests(state, response) {
    //   state.response = response
    // },

    [mutations.SET_USER](state, user) {
      state.user = user
    }
  },
  actions: {
    incrementCount(store) {
      store.commit('incrementCount')
    },

    async getInterests({ commit, dispatch }, form) {
      await dispatch('setUrlParams', form)
      const response = await axios.get(completeUrl)
      const interests = await dispatch('fetchStarredInterests')

      response.data.data.forEach(result => {
        result.starred = interests.some(interest => interest.name == result.name)
      })

      commit('getInterests', response.data.data)
    },

    async register(store, user) {
      return axios.post('/api/accounts', user)
    },

    // async register(store, user) {
    //   await axios.post(`/api/signup`, {
    //     name: user.name,
    //     email: user.email,
    //     password: user.password
    //   })
    // },

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

    // async fetchProject(store, id) {
    //   const projectRequest = await axios.get(`/api/projects/${id}`)
    //   return projectRequest.data
    // },

    async fetchProjects() {
      const projectsRequest = await axios.get('/api/projects')
      console.log(projectsRequest.data)
      return projectsRequest.data
    },

    async setUrlParams({ store, dispatch }, { keyword, searchType, locale }) {
      if (searchType == 'adinterestsuggestion') {
        params.set('interest_list', `["${keyword}"]`)
      } else {
        params.set('q', keyword)
      }

      params.set('type', searchType)
      params.set('locale', locale)
      completeUrl = baseUrl.toString()
      console.log(completeUrl)
    },

    async fetchSession({ commit }) {
      const user = await axios.get('/api/accounts/session')
      commit(mutations.SET_USER, user.data || null)
    },

    async login({ commit }, credentials) {
      try {
        const user = await axios.post('/api/accounts/session', credentials)
        commit(mutations.SET_USER, user.data)
      } catch (e) {
        throw e
      }
    },
    async register(store, user) {
      return axios.post('/api/accounts', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/accounts/session')
      commit(mutations.SET_USER, null)
    }
  },
  modules: {}
})
