import Vue from 'vue'
import App from './App.vue'

import ValienUpload from './lib/index'
Vue.use(ValienUpload)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App)
})
