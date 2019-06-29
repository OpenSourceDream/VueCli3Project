import Vue from 'vue'
import Router from 'vue-router'
import { defaultRoutes } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: defaultRoutes
})
