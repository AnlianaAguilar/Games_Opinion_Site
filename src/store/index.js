import Vue from 'vue'
import Vuex from 'vuex'
import games from './games.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games
  },
  getters: {
  },
  mutations: {
    // SHOW_MODAL(state,id){
    //   state.games.forEach(game => {
    //     if()
    //   });
    // }
  },
  actions: {
  },
  modules: {
  }
})
