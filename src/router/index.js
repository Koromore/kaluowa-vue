import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
// import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
