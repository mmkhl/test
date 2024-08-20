import axios from 'axios'


export default {
  namespaced: true,
  state: {
    loaders: {
      login: false
    }, 
    respData: {
      errorInfo: null, 
      successInfo: null,
      isError: false,
      isAuth: false
    }
  },
  actions: {
    async authUser({commit, state}, payload){
      try {
        commit('SET_LOADING_AUTH', true)
        const resp = await axios.post('https://dev.moydomonline.ru/api/auth/login/', payload)
        commit('SET_IS_AUTH', true)
        
        console.log(resp);
      } catch (error) {
        commit('SET_ERROR_LOGIN', true)
        commit('SET_ERROR_DATA', error.response.data)        
      } finally {
        commit('SET_LOADING_AUTH', false)
      }
    },
  },
  mutations: {
    SET_LOADING_AUTH(state, payload){
      state.loaders.login = payload
    },
    SET_ERROR_LOGIN(state, payload){
      state.respData.isError = payload
    },
    SET_ERROR_DATA(state, payload){
      state.respData.errorInfo = payload
    },
    SET_IS_AUTH(state, payload){
      state.respData.isAuth = payload
      localStorage.setItem('isAuthUser', payload)
    },
  },
  getters: {
  },
}
