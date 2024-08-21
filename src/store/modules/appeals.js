import axios from 'axios'

export default{
  namespaced: true, 
  state: {
    data: [],
    paginations: {
      currentPage: 1,
      limit: 10
    }

  },
  actions: {
    getData(){},
    getItem(){},
    addItem(){},
    editItem(){},
    async getFilterHomes({commit, state}, payload){
      try {
        const resp = await axios.get(`https://dev.moydomonline.ru/api/appeals/v1.0/appeals/`, { params: { page_size: state.paginations.limit, page: state.paginations.currentPage } })
        commit('SET_DATA', resp.data.results)
      } catch (error) {
        
      } finally {

      }
    },
  },
  mutations: {
    SET_DATA(state, payload){
      state.data = payload
    },
    SET_FILTER_HOMES(state, payload){},

  },
  getters: {},
}
