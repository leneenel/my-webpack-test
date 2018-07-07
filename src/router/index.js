import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import User from '@/components/user'
import Phone from '@/components/goods/phone'
import Tablet from '@/components/goods/Tablet'
import Computer from '@/components/goods/Computer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/home',
      name: 'home',
      component: Home,

      children: [
        {
          path: 'phone',
          component: Phone
        },
        {
          path: 'tablet',
          component: Tablet
        },
        {
          path: 'computer',
          component: Computer
        },
        {
          path: '',
          component: Phone
        }
      ]
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
})
