import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/firstPage',
    component: () => import('@/views/firstPage')
  },
  {
    path: '/center',
    component: () => import('@/views/center')
  },
  {
    path: '/projecttype',
    component: () => import('@/views/projecttype')
  },
  {
    path: '/community',
    component: () => import('@/views/community')
  },
  {
    path: '/onetoone',
    component: () => import('@/views/onetoone')
  },
  {
    path: '/sport',
    component: () => import('@/views/sport')
  },
  {
    path: '*',
    redirect: '/firstPage' // 2. 重定向
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
