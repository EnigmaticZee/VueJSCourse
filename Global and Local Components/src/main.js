import Vue from 'vue'
import App from './App.vue'
//Global Components
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('cmp-header', Header);
Vue.component('cmp-footer', Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
