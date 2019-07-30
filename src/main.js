import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import QMSMain from './components/QMSMain'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/qms', component: QMSMain },
  { path: '/', component: App }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')