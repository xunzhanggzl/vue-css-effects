import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueClipboard from 'vue-clipboard2'

const cssRequire = require.context('./styles/', true, /.css$/)
// 与 styles/index.js 作比较
cssRequire.keys().forEach((cssFilePath) => {
  cssRequire(cssFilePath)
})

Vue.config.productionTip = false
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
