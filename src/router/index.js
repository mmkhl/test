import Vue from 'vue'
import VueCoockies from 'vue-cookies'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'appeals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.../pages/Appeals.vue
    component: () => import(/* webpackChunkName: "about" */ '../pages/Appeals.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthUser')
  if (to.name !== 'login' && !isAuthenticated){
    next({ name: 'login' })
  } else{
    const token = VueCoockies.get('token')

    next()
  } 
})

export default router
