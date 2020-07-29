// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VConsole from 'vconsole'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

console.log('chy', process.env.NODE_ENV)
if (process.env.NODE_ENV == 'development') {
  new VConsole()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
