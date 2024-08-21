import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { DateTime } from "luxon";


import VueCookies from 'vue-cookies'

Vue.config.productionTip = false
Vue.use(VueCookies, { expires: '7d'})

Vue.prototype.$axios = axios;
Vue.prototype.$DateTime = DateTime;
const token = VueCookies.get('token')
if (token) {
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = `Token ${token}`
}



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
