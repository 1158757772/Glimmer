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
    path: '/onetooneDetails/:id',
    component: () => import('@/views/onetoone/onetooneDetails')
  },
  {
    path: '/titleDetails',
    component: () => import('@/views/onetoone/titleDetails')
  },
  {
    path: '/fitrate',
    component: () => import('@/views/onetoone/fitrate')
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
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
