<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="font-diablo">Inicio</router-link> |
      <router-link to="/about" class="font-diablo">Acerca de</router-link>
    </div>
    <LoadLayout v-if="isLoading">
      <BaseLoading />
    </LoadLayout>
    <MainLayout v-else /> 
  </div>
</template>

<script>

import { mapState } from 'vuex'
import LoadLayout from './layouts/LoadLayout'
import MainLayout from './layouts/MainLayout'
import BaseLoading from '@/components/BaseLoading.vue'

export default {
  name: 'App',
  components: {
    MainLayout,
    LoadLayout,
    BaseLoading
  },
  computed: {
    // Uso: mapState(moduleName, { state })
    // ...mapState('loading', {
    //   isLoading: 'isLoading'
    // })
    isLoading () {
      return this.$store.state.loading.isLoading
    }
  }  
}
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #ffffff // Le ponemos un color de letra blanco para que resalte
  background-color #15202b // Le cambiamos el color de fondo por un azul marino oscuro
</style>
