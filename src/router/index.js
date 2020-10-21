import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Report from '@/components/Report'
import Debug from '@/components/Debug'
import DebugEdite from '@/components/DebugEdite'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Report',
      name: 'Report',
      component: Report
    },
    {
      path: '/Debug',
      name: 'Debug',
      component: Debug
    },
    {
      path: '/DebugEdite',
      name: 'DebugEdite',
      component: DebugEdite
    },
  ]
})
