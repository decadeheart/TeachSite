import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import TimeEntries from '../components/TimeEntries'
import BookAdmin from '../components/BookAdmin'
import BookList from '../components/BookList'
import Control from '../components/Control'
import VedioAdmin from '../components/VedioAdmin'
import VedioList from '../components/VedioList'

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
      path: '/books',
      component: BookList,
    },
    {
      path: '/vedios',
      component: VedioList,
    },
    {
      path: '/time-entries',
      component:TimeEntries,
      children : [{
        path : 'log-time',
        component : resolve => require(['../components/LogTime.vue'],resolve),
      }]
    },
    {
      path: '/control',
      component: Control,
      children : [{
        path : 'bookAdmin',
        component : resolve => require(['../components/BookAdmin.vue'],resolve),
      },
      {
        path : '/',
        component : resolve => require(['../components/BookAdmin.vue'],resolve),
      },
      {
        path : 'BookTable',
        component : resolve => require(['../components/BookTable.vue'],resolve),
      },
      {
        path : 'VedioTable',
        component : resolve => require(['../components/VedioTable.vue'],resolve),
      },
      {
        path : 'vedioAdmin',
        component : resolve => require(['../components/VedioAdmin.vue'],resolve),
      },
      ]
    },
  ]
})
