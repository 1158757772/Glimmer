import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    detaillist: [],
    current: 0,
    loading: false
  },
  mutations: {
    changelist (state, list) {
      state.list = list
    },
    changedetaillist (state, list) {
      state.detaillist = list
    },
    cleanlist (state) {
      state.list = []
    },
    changeloading (state) {
      state.loading = false
    }

  },
  actions: {
    getmyjson (store, myid) {
      axios.get('/json/C_json.json').then(res => {
        store.commit('changelist', res.data.toString(myid))
        console.log(res.data.toString(myid))
      })
    },

    getdetaillist (store, myid) {
      return axios.get(
        `/cgi-bin/gywcom_gy_filter?page=0&pcnt=6&ranktype=time&pstatus=active&ptype=${myid}`

      ).then(res => {
        store.state.detaillist = [...store.state.detaillist, ...res.data.data.projs]
        store.commit('changedetaillist', store.state.detaillist)
        store.state.loading = false
      })
    }

  },
  modules: {

  }
})
