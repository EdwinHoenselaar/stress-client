import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import QMSMain from './components/QMSMain'
import QMSNewForm from './components/QMSNewForm'
import QMSEditForm from './components/QMSEditForm'
import LandingPage from './components/LandingPage'
import Quiz from './components/Quiz'
import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
 
window.toastr = require('toastr')
 
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueToastr2)

const routes = [
  { path: '/qms', component: QMSMain },
  { path: '/', component: LandingPage },
  { path: '/qms/form', component: QMSNewForm },
  { path: '/qms/:id', component: QMSEditForm },
  { path: '/quiz', component: Quiz },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')