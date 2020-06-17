import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('@/views/Message.vue')
  },
  {
    path: '/kids',
    name: 'Kids',
    component: () => import('@/views/Kids.vue')
  },
  {
    path: '/prayer',
    name: 'Prayer',
    component: () => import('@/views/Prayer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
