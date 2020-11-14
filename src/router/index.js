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
    path: '/lovelovedetail/:Id/:Type',
    component: () => import('@/views/lovelovedetail')
  },
  {
    path: '/center/cen_1',
    component: () => import('../views/center/cen_1')
  },
  {
    path: '/projecttype',
    component: () => import('@/views/projecttype'),
    children: [{
      path: '/projecttype/detail/:myid', // 6-动态路由
      component: () => import('@/views/detail')
    },
    {
      path: '/projecttype',
      redirect: '/projecttype/detail/jz' // 重定向
    }
    ]
    /* [
      {
        path: '/projecttype/fp',
        component: () => import('../views/projecttype/fp')
      },
      {
        path: '/projecttype/jb',
        component: () => import('../views/projecttype/jb')
      },
      {
        path: '/projecttype/jy',
        component: () => import('../views/projecttype/jy')
      },
      {
        path: '/projecttype/qt',
        component: () => import('../views/projecttype/qt')
      },
      {
        path: '/projecttype/zr',
        component: () => import('../views/projecttype/zr')
      }
    ] */
  },
  {
    path: '/C_search',
    component: () => import('../views/C_search')
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
    path: '/allDetails/:id',
    component: () => import('@/views/onetoone/allDetails')
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
