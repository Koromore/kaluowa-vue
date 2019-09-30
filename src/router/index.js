import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Brand from '@/pages/brand/Brand'
import News from '@/pages/news/News'
import Product from '@/pages/product/Product'
import Service from '@/pages/service/Service'
import Leaveword from '@/pages/leaveword/Leaveword'
import Contact from '@/pages/contact/Contact'

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
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/leaveword',
      name: 'Leaveword',
      component: Leaveword
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
