import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { StarRating } from 'vue-rate-it'
import App from './App.vue'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('star-rating', StarRating)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
