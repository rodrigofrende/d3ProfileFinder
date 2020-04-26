import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// importar librerias
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl' 

import { library } from '@fortawesome/fontawesome-svg-core'
// Iconos de tipo "Solid"
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
// Iconos de tipo "Brand" (marcas o logos de empresas)
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
// El componente que vamos a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/css/main.styl'  // css global

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

// Dar de alta componentes
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

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
