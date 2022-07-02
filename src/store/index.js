import Vue from 'vue'
import Vuex from 'vuex'
import games from './games.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    opiniones:[],
    games
  },
  getters: {
    showOpinions(state){
      return state.opiniones
    }
  },
  mutations: {
    ADD_OPINION:(state, opinion)=>{
      opinion.id = Math.floor(Math.random()*1000)
      state.opiniones.push(opinion)
    }
  },
  actions: {
    addOpinions:({commit},opinion)=>{
      commit('ADD_OPINION', opinion)
    }
  },
  modules: {
  }
})
