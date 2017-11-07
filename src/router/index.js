import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import TimeEntries from '../components/TimeEntries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/time-entries',
      component:TimeEntries,
      children : [{
        path : 'log-time',
        component : resolve => require(['../components/LogTime.vue'],resolve),
      }]
    },
  ]
})
