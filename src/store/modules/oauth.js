import * as oauth from '@/api/oauth'

export default {
    namespaced: true,
    state: {
        accessToken: null
    },
    mutations: {
        SET_ACCESS_TOKEN (state, payload){
            state.accessToken = payload
        }
    },
    actions: {
        getToken ({ commit }){
            commit('loading/SET_LOADING', true, { root: true })  //pongo el flag de loading, para cambiar layout y spinner
            oauth.getToken()
                .then(({ data }) => {
                    // guardamos el valor del token con la mutacion
                    commit('SET_ACCESS_TOKEN', data.access_token) // accesstoken todo junto=?
                })
                .catch((err) => {
                    //en caso de error, se limpia el token
                    commit('SET_ACCESS_TOKEN', null)
                    console.log('Error en OAuth store/modules', err)
                })
                .finally(() => {
                    commit('loading/SET_LOADING', false, { root: true }) //termino de cargar, cambio layout y spinner
                    console.log('todo en orden! (Y)')
                })
        }
    }
}