import Vue from 'vue'
import App from './App.vue'
//Global Components
import Header from './Components/Header.vue'
import Footer from './Components/Footer.vue'

Vue.component('cmp-header', Header);
Vue.component('cmp-footer', Footer);
new Vue({
  el: '#app',
  render: h => h(App)
})
