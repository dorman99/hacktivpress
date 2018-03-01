import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Articles: [],
    buttonpost: true
  },
  mutations: {
    allArticles (state, payload) {
      state.Articles = payload
      if (localStorage.getItem('token')) {
        state.buttonpost = true
      } else {
        state.buttonpost = false
      }
    },
    destroydata (state, payload) {
      state.Articles = []
      localStorage.clear()
    },
    changebuttonhide (state, payload) {
      console.log('ini mutasi nya loh')
      state.buttonpost = false
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
    },
    hidepostbutton ({commit}) {
      commit('changebuttonhide')
    }
  }
})
