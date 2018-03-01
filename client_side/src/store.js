import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Articles: []
  },
  mutations: {
    allArticles (state, payload) {
      state.Articles = payload
    },
    destroydata (state, payload) {
      state.Articles = []
      localStorage.clear()
    }
  },
  actions: {
    getAllArticles ({commit}, payload) {
      // let self = this
      axios.get('http://localhost:3000/articles')
        .then(response => {
          console.log(response)
          commit('allArticles', response.data.data)
        })
    },
    logout ({commit}) {
      commit('destroydata')
    }
  }
})
