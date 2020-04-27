import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// importar librerias
import './plugins/bootstrapVue'  //importo los componentes en archivo separados , para hacer el codigo mas limpio
import './plugins/fontAwesome'

import './assets/css/main.styl'  // css global

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      //asumo que la sintaxis es 'nombreCompoente/metodo' . desconozco que hace el null y el root
      store.dispatch('oauth/getToken', null, { root: true }) // que es el root true?¿
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
