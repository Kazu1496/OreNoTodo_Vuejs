import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/PageTop.vue'
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
      path: '/card/:card_id',
      name: 'show-item',
      component: ShowItem
    }
  ]
})
