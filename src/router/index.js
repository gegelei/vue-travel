import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import List from '../pages/list/List'
import SwiperTest from '../pages/list/SwiperTest'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/test',
      name: 'test',
      component: SwiperTest
    },
    {
      path: '/City',
      name: 'City',
      component: City
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
