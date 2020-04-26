import Vue from 'vue'
import Vuex from 'vuex'

import oauth from './modules/oauth'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  // aqui se registran todos los modulos . Borré el state,mutations,actions
  modules: {
    oauth,
    loading
  }
})
