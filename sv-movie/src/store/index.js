import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId: 2,
    movies: [
      {
          id: 1,
          year: 2020,
          subject: "新受験生数学1A2B",
          date: new Date(2021, 2, 20, 19, 50, 0),
          link: "https://google.com"
      },
      {
          id: 2,
          year: 2020,
          subject: "新受験生英文読解",
          date: new Date(2021, 2, 21, 18, 30, 0),
          link: "https://www.yahoo.co.jp/"
      },
    ]
  },
  getters: {
    moviesCount(state) {
      return state.movies.length
    },
    getNextId(state) {
      state.currentId++
      return state.currentId
    }
  },
  mutations: {
    addMovie(state, payload) {
      state.movies.push(payload.movie)
    }
  },
  actions: {
  },
  modules: {
  }
})
