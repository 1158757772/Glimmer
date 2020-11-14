import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footBarOnoff: true,
    giveFootOnoff: false,
    openCard: {}
  },
  mutations: {
    openFootBar (state) {
      state.footBarOnoff = true
    },
    closeFootBar (state) {
      state.footBarOnoff = false
    },
    openGiveFootBar (state) {
      state.giveFootOnoff = true
    },
    closeGiveFootBar (state) {
      state.giveFootOnoff = false
    },
    createOpenCard (state, obj) {
      state.openCard = obj
    },
    destoryOpenCard (state) {
      state.openCard = {}
    }
  },
  actions: {
  },
  modules: {

  }
})
