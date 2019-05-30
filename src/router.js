import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/PageTop.vue'
import Signin from './components/pages/PageSignin.vue'
import Signup from './components/pages/PageSignup.vue'
import ShowItem from './components/pages/PageShowItem.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/cards/:card_id',
      name: 'show-item',
      component: ShowItem
    }
  ]
})
