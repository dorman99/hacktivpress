import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import login from './components/login.vue'
import bodyvue from './components/bodyvue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bodyvue',
      component: bodyvue
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
