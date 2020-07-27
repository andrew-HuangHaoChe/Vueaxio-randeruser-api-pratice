// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios' //主要的ajax套件
import VueAxios from 'vue-axios' //將它轉為vue的套件

Vue.use(VueAxios, axios)  //import上面兩個相關套件還不夠要使用use方法才能去做使用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
