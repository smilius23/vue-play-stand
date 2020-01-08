import Vue from 'vue'
import router from '@/router'
import Home from '@/pages/Home.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<Home />',
  components: { Home }
})
