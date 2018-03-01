import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import swal from 'sweetalert'
import axios from 'axios'

Vue.prototype.$swal = swal
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3000'
})
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
