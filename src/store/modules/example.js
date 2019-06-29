// import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    name: ''
  },
  getters: {
    getName: state => {
      return `my name is ${state.name}`
    }
  },
  mutations: {
    SET_NAME: (state, data) => {
      state.name = data
    }
  },
  actions: {
    setName ({ commit, state }, data) {
      commit('SET_NAME', data)
    }
  }
}
