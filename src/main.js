import Vue from 'vue'
import App from './App'
import router from './router'
import storeFactory from './vuex/index'

Vue.config.productionTip = false
import '@/mock/index'

new Vue({
  el: '#app',
  router,
  store: storeFactory,
  components: { App },
  template: '<App/>'
})
