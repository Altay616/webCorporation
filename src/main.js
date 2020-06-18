import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import "./assets/style/font-awesome-4.7.0/css/font-awesome.css";
import './assets/style/font-awesome-4.7.0/css/font-awesome.min.css';
import './assets/style/normalize.css'

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: function (h) { return h(App) }
}).$mount('#app')
