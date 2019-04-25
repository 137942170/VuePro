// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils
Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  components: { App },
  template: '<App/>'
})
