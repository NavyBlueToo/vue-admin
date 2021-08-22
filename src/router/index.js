import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('views/web/home/Home.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('views/web/home/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('views/web/contact/Contact.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('views/web/news/home/News.vue'),
    // children: [{
    //   path: '',
    //   name: '',
    //   component: ''
    // }]
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('views/web/product/home/Product.vue'),
    // children: [{
    //   path: '',
    //   name: '',
    //   component: ''
    // }]
  },
  {
    path: '/scope',
    name: 'Scope',
    component: () => import('views/web/scope/Scope.vue')
  },
  {
    path: '/serve',
    name: 'Serve',
    component: () => import('views/web/serve/Serve.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
