import Vue from 'vue'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router/index.js'
import store from '@/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css' // tiger's

import '@/icons' // icon
import '@/permission' // permission control


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')