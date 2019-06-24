import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/FormView.vue')
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('./views/TreeView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('./views/ModalView.vue')
    }
  ]
})
