import Vue from 'vue'
import App from './App.vue'
// import hxUI from '../packages'
// console.log(hxUI)
// Vue.use(hxUI)
import { HXButton } from '../packages'
Vue.use(HXButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
