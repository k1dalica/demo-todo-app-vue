import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        done: false,
        text: 'Learn Vue.js'
      },
      {
        done: false,
        text: 'Clean room'
      }
    ]
  },

  getters: {
    find: (state) => (index) => state.list[index]
  },

  mutations: {
    add (state, item) {
      state.list.push(item)
    },

    update (state, { index, data }) {
      Vue.set(state.list, index, data)
    },

    delete (state, index) {
      state.list.splice(index, 1)
    },

    markAllAsDone (state) {
      state.list.forEach(item => {
        item.done = true
      })
    }
  }
})
