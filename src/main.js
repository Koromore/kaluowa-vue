// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import scroll from 'vue-seamless-scroll'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/dist/css/swiper.css'
import $ from 'jquery'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueAwesomeSwiper)
Vue.use(scroll)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$ajax = axios
Vue.prototype.$ = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
