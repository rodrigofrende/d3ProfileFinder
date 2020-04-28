import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]
//los dos puntos (:) en el path hacen referencia a un parámetro o variable en la ruta.
const routes = routerOptions.map(r => {
  return {
    ...r,
    component: () => import(/* webpackChunkName: "[request]" */`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

// const router = new VueRouter({
//   routes
// })

//npm run build , genera bloques de codigo llamados chunk , estos se puede renombrar 
// {
//     path: '/',
//     name: 'Home',
//     component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/Index.vue')
// }

export default router
