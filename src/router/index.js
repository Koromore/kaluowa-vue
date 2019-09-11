import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Brand from '@/pages/brand/Brand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    }
  ]
})
