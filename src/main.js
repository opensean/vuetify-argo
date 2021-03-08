import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCytoscape from 'vue-cytoscape'

Vue.config.productionTip = false

Vue.use(VueCytoscape)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
