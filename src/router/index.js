import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/home/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/about/About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
