import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const cssRequire = require.context('./styles/', true, /.css$/)

cssRequire.keys().forEach((cssFilePath) => {
  cssRequire(cssFilePath)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
